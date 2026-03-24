import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ArrowLeft, ExternalLink, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const FinancialWellbeing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/e7865e2d-c0fa-4670-9382-37fa5d8987f3.png"
            alt="Retirement Planning"
            className="w-full h-full object-cover opacity-30"
          />
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
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">Financial Wellbeing</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            401(k) plans, employer matching, and retirement savings options
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

        {/* Video Section - Full Width */}
        <div className="max-w-6xl mx-auto mb-8">
          <Card className="p-6">
            <div className="aspect-video w-full print:hidden">
              <div className="w-full h-full rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-sm">Financial Wellbeing video coming soon.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* CTA Section */}
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
            <h2 className="text-xl font-bold text-abc-primary mb-4">Quick Access</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-4">
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
                href="https://digital.fidelity.com/prgw/digital/login/full-page"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-64"
              >
                <Button size="lg" className="gap-2 w-full h-12">
                  Fidelity
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>
            <div className="space-y-4">
              <div className="text-muted-foreground text-sm">
                <p>
                  <strong>Fidelity:</strong>{" "}
                  <a href="tel:800-835-5095" className="text-primary hover:underline">
                    800.835.5095
                  </a>
                </p>
              </div>
              <div className="flex justify-center">
                <a href="mailto:hr@abccatering.com" className="w-full sm:w-64">
                  <Button size="lg" className="gap-2 w-full h-12">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>
          </Card>

          {/* Overview Section */}
          <Card className="p-8">
            <div className="space-y-6">
              <p className="text-foreground">
                The ABC Catering 401(k) plan allows you to contribute part of your salary toward retirement
              </p>
            </div>
          </Card>

          {/* Transitioning to Fidelity Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">
              Transitioning to Fidelity for 401(k) starting in 2026
            </h2>

            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      We offer a comprehensive 401(k) retirement plan through Fidelity starting January 1st 2026
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      To learn more about 401(k) transition, please watch our Fidelity transition video on this topic
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Eligibility Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Eligibility</h2>

            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      All Associates over the age of 18, including temporary and part-time, are eligible to participate
                      in the 401(k) plan
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Employee Enrollment Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Employee enrollment and contributions</h2>

            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Eligible employees can start contributing to the 401(k) plan on day one</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Auto-enrollment</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      If you {"don't"} enroll or opt-out of the plan, {"you'll"} automatically be enrolled at 6% of your
                      pay (pre-tax)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You will be enrolled into the {"plan's"} qualified default investment option, the T. Rowe Price
                      Target Date Retirement Funds
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You will be defaulted into the appropriate target date fund in accordance with your age</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You have approximately 35 days from your date of hire to contact Fidelity if you wish to opt out
                      of the Plan or change your deferral amount
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You may contact Fidelity by logging in to netbenefits.com or by calling Fidelity Net Benefits Line
                      at 800.835.5095
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Annual Contribution Limits</h3>
                <div className="overflow-x-auto mt-4">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="bg-abc-blue text-white font-semibold">Contribution Type</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">Age</TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">
                          Annual Maximum Contribution
                        </TableHead>
                        <TableHead className="text-center bg-abc-blue text-white font-semibold">
                          Eligible for Company Match
                        </TableHead>
                        <TableHead className="bg-abc-blue text-white font-semibold">Information</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Standard Contribution</TableCell>
                        <TableCell className="text-center">Under 50</TableCell>
                        <TableCell className="text-center">$23,500</TableCell>
                        <TableCell className="text-center">Yes</TableCell>
                        <TableCell>
                          <ul className="space-y-1 text-sm">
                            <li>• Automatically enrolled at 6%</li>
                            <li>• Contribution in Traditional 401(k) or Roth</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Catchup Contribution</TableCell>
                        <TableCell className="text-center">50-59 or Over 64</TableCell>
                        <TableCell className="text-center">$31,000</TableCell>
                        <TableCell className="text-center">No</TableCell>
                        <TableCell>
                          <ul className="space-y-1 text-sm">
                            <li>• You must make a contribution election to participate in Catchup Contribution</li>
                            <li>
                              • If earned more that $145,000 in prior year catchup contribution must be made into Roth
                              account (no action needed, will be automatic)
                            </li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Super Catchup Contribution</TableCell>
                        <TableCell className="text-center">Age 60-63</TableCell>
                        <TableCell className="text-center">$34,750</TableCell>
                        <TableCell className="text-center">No</TableCell>
                        <TableCell>
                          <ul className="space-y-1 text-sm">
                            <li>• You must make a contribution election to participate in Catchup Contribution</li>
                            <li>
                              • If earned more that $145,000 in prior year catchup contribution must be made into Roth
                              account (no action needed, will be automatic)
                            </li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Mega Roth</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">$15,000</TableCell>
                        <TableCell className="text-center">No</TableCell>
                        <TableCell className="text-sm">
                          • After attaining maximum annual standard and catchup contribution, may be eligible to save
                          additional in an after-tax Roth contribution, which will be automatically converted to an Roth
                          IRA
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          </Card>

          {/* Company Matching Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Company matching</h2>

            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">
                        ABC Catering will match 50% of your contribution up to 6% of your pay. All matching contributions are
                        made on a pre-tax basis. This is free money towards your retirement - take advantage of it!
                      </div>
                      <div className="ml-6 space-y-2 mt-3">
                        <div className="flex items-start">
                          <span className="text-abc-primary mr-3 mt-1">◦</span>
                          <span>This also gives you ownership opportunity in the company:</span>
                        </div>
                        <div className="ml-6 space-y-2">
                          <div className="flex items-start">
                            <span className="text-abc-primary mr-3 mt-1">▪</span>
                            <span>2/3 of your match will be in cash - contributed each pay period</span>
                          </div>
                          <div className="flex items-start">
                            <span className="text-abc-primary mr-3 mt-1">▪</span>
                            <span>1/3 of your match will be in company stock - contributed annually</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Example – An associate whose annual pay is $75,000 and is contributing 6% of their salary will
                      contribute $4,500. The company will match $2,250 (50% of $4,500). Of this match, $1,500 (2/3 of
                      $2,250) will be allocated to their account in cash and $750 (1/3 of $2,250) will be in company
                      stock
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Vesting Schedule Section */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Vesting schedule</h2>

            <div className="space-y-10">
              <div>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Vesting means how much of your 401(k) funds you can take with you - if or when you leave the
                      company
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Your own contributions and the growth on those contributions are always 100% vested</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      {"ABC Catering's"} contributions to your 401(k) follows a vesting schedule - meaning you earn ownership of
                      these funds over time
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>You become fully vested after 5 years of service</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-x-auto mt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2 bg-abc-blue text-white font-semibold">Years of Service</TableHead>
                      <TableHead className="text-center bg-abc-blue text-white font-semibold">
                        Vesting Percentage
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Less than 1 year</TableCell>
                      <TableCell className="text-center">0%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">1 but less than 2 years</TableCell>
                      <TableCell className="text-center">20%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">2 but less than 3 years</TableCell>
                      <TableCell className="text-center">40%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">3 but less than 4 years</TableCell>
                      <TableCell className="text-center">60%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">4 but less than 5 years</TableCell>
                      <TableCell className="text-center">80%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">5 or more</TableCell>
                      <TableCell className="text-center">100%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </Card>

          {/* Different Types of 401(k) Accounts */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold text-abc-primary mb-8">Different types of 401(k) accounts</h2>

            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Pre-tax 401(k)</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>contribute part of your salary toward retirement while deferring taxes on that income</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Contributions go directly into the plan, reducing your taxable income and federal income tax,
                      making it a cost-effective way to boost retirement savings
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You can save up to 75% of your base pay with before-tax contributions, subject to IRS limits
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Contributions are taxed when withdrawn</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Roth 401(k)</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Lets you contribute post-tax income instead</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>The key difference is that Roth contributions are taxed in the year earned</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You can also save up to 75% of your base pay with Roth contributions, subject to IRS limits
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Beneficiaries, Loans, and Employee Ownership */}
          <Card className="p-8">
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Beneficiaries</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Please add your beneficiary information directly to netbenefits.com. Beneficiary information for
                      your 401(k) account is not stored in ABC Catering systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Please ensure you keep your beneficiary information up to date in the Fidelity portal</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Loans</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You can request a loan from the Plan if you are active associate participating in the Plan and you
                      have a vested account balance of $1,000 or more
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      You may request a loan through netbenefits.com or by calling the Fidelity Net Benefits Line at
                      800.835.5095
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">
                  Employee Ownership: Shared Rewards for our Collective Success
                </h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Employee ownership at ABC Catering is about building and sustaining a rewarding environment for the
                      associates of today and for generations of owners in the future
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      Working together as owners, we align our decision making with the {"firm's"} values and goals and
                      motivate each other to improve performance in all areas
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      When we deliver on our objectives, we are taking care of the company and each other - resulting in
                      shared rewards and individual recognition for our collective success
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-abc-primary mb-6">Opportunities for investment</h3>
                <ul className="space-y-3 text-foreground ml-6">
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>Employee ownership is a bedrock principle at ABC Catering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <span>
                      All associates who meet eligibility requirements can and are encouraged to become owners, and we
                      are continuing to advance our ownership model to broaden associate equity participation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-abc-primary mr-3 mt-1">•</span>
                    <div>
                      <div className="mb-2">Today, there are three main ways to participate:</div>
                      <div className="ml-6 space-y-2">
                        <div>1. 401(k) Plan – Stock Match & Supplemental Contributions</div>
                        <div>2. Annual Stock Offerings</div>
                        <div>3. Incentive Programs</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <BenefitsNavigation currentRoute="/benefits/financial-wellbeing" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FinancialWellbeing;
