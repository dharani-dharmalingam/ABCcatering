import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { ArrowLeft, Check, Download } from "lucide-react";
import { Link } from "react-router-dom";
import petPartnersLogo from "@/assets/pet-partners-logo-new.png";
import farmersLogo from "@/assets/farmers-logo.webp";
import allstateLogo from "@/assets/allstate-logo.png";

const AdditionalVoluntaryBenefits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-abc-primary via-abc-primary/95 to-abc-blue py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Link 
              to="/"
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Chapter 15
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Additional Voluntary Benefits
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl">
                Explore voluntary benefits to enhance your coverage with pet insurance, auto and home insurance, identity protection, and legal plans.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="pet-partners" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-muted p-2">
                <TabsTrigger value="pet-partners" className="text-sm md:text-base py-3">
                  Pet Partners
                </TabsTrigger>
                <TabsTrigger value="auto-home" className="text-sm md:text-base py-3">
                  Auto & Home
                </TabsTrigger>
                <TabsTrigger value="identity" className="text-sm md:text-base py-3">
                  Identity Protection
                </TabsTrigger>
                <TabsTrigger value="legal" className="text-sm md:text-base py-3">
                  Legal Plan
                </TabsTrigger>
              </TabsList>

              {/* Pet Partners Tab */}
              <TabsContent value="pet-partners" className="space-y-8">
                <Card className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-8">
                    <img src={petPartnersLogo} alt="Pet Partners" className="h-16 md:h-20" />
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-abc-primary mb-4">
                        Your Pet Insurance Benefit
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        We are excited to offer pet health insurance for your dog or cat at a <strong>5% discount!</strong>
                      </p>
                    </div>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 border-blue-200">
                      <h3 className="text-2xl font-bold text-abc-primary mb-4">
                        What is Pet Insurance?
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Pet insurance is health insurance for dogs and cats. Get reimbursed for costly veterinary bills and focus more on the health of your pets and less on how you're going to pay for it. Plans feature comprehensive coverage for accidents, illnesses and injuries including cancer coverage.
                      </p>
                    </Card>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-6">
                        How it Works
                      </h3>
                      <div className="grid md:grid-cols-4 gap-4">
                        {[
                          { step: "1", title: "Enroll", description: "Enroll in pet insurance" },
                          { step: "2", title: "Pay", description: "Pay your vet" },
                          { step: "3", title: "Submit", description: "Submit a claim with your vet bill" },
                          { step: "4", title: "Get Reimbursed", description: "Get reimbursed for eligible expenses" }
                        ].map((item) => (
                          <Card key={item.step} className="p-4 text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                              {item.step}
                            </div>
                            <h4 className="font-bold text-abc-primary mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-6">
                        We've Got You Covered
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          "Common Illnesses",
                          "Prescription Medication",
                          "Toxin Ingestion",
                          "Alternative Treatments**",
                          "Behavioral Issues**",
                          "Preventative Care**",
                          "Digestive Issues",
                          "Diagnostics",
                          "Cancer",
                          "Broken Bones",
                          "Hospitalization",
                          "Surgery"
                        ].map((coverage) => (
                          <div key={coverage} className="flex items-center gap-2 p-3 bg-background border rounded-lg">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm font-medium">{coverage}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4">
                        **Eligible with optional Alternative, Behavioral Issues and Preventive Care rider.
                      </p>
                    </div>

                    <Card className="bg-blue-50 border-blue-200 p-6">
                      <h3 className="text-xl font-bold text-abc-primary mb-4">
                        Get Your Pet's Quote
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Visit PetPartners.com to get a personalized quote for your dog or cat.
                      </p>
                      <Button 
                        size="lg"
                        className="bg-abc-blue hover:bg-abc-blue/90"
                        asChild
                      >
                        <a href="https://petpartners.com" target="_blank" rel="noopener noreferrer">
                          Get Your Quote
                        </a>
                      </Button>
                    </Card>

                    <div className="text-xs text-muted-foreground border-t pt-6">
                      <p className="mb-2">
                        Participation in this plan is voluntary and not subject to ERISA. Plans and coverage vary by state. For full plan terms, conditions, limitations and exclusions, go to PetPartners.com and click on Sample Policies.
                      </p>
                      <p>
                        Policies are underwritten by Independence American Insurance Company, 485 Madison Ave. 14th Fl. New York, NY 10022 (in WA by American Pet Insurance Company, 6100 4th Ave. S., Seattle WA 98108). PetPartners, Inc. is a licensed insurance administrator located at 8051 Arco Corporate Drive, Suite 350, Raleigh, NC 27617.
                      </p>
                      <p className="mt-4 font-medium">
                        Contact: <a href="mailto:help@petpartners.com" className="text-abc-blue hover:underline">help@petpartners.com</a> | 866-774-1113
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Auto & Home Tab */}
              <TabsContent value="auto-home" className="space-y-8">
                <Card className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-8">
                    <img src={farmersLogo} alt="Farmers GroupSelect" className="h-24 md:h-32" />
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-abc-primary mb-4">
                        Farmers GroupSelect®
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        Take advantage of special Farmers GroupSelect savings. Get your free quotes to see how much you could save by switching.
                      </p>
                    </div>

                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 md:p-8 border-blue-200">
                      <div className="flex items-center justify-center mb-4">
                        <Badge className="bg-green-600 text-white text-lg px-4 py-2">
                          Average Savings: $509*
                        </Badge>
                      </div>
                      <p className="text-center text-muted-foreground">
                        Others have saved an average of <strong>$509*</strong> on auto insurance by making the switch.
                      </p>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Auto Insurance */}
                      <Card className="p-6 border-2 border-primary/20">
                        <h3 className="text-2xl font-bold text-abc-primary mb-4">
                          Auto Insurance
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Choose your coverage while enjoying savings and benefits:
                        </p>
                        <div className="space-y-2">
                          {[
                            "Special group discounts",
                            "Automated payment discounts",
                            "Claim-free driving rewards",
                            "Enhanced rental car damage coverage",
                            "No deductible repairs for windshield damage",
                            "Roadside assistance",
                            "Guaranteed auto repairs for covered losses",
                            "ID protection services"
                          ].map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Home Insurance */}
                      <Card className="p-6 border-2 border-primary/20">
                        <h3 className="text-2xl font-bold text-abc-primary mb-4">
                          Home Insurance
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          Get home insurance coverage along with savings and benefits:
                        </p>
                        <div className="space-y-2">
                          {[
                            "Special group discounts",
                            "Replacement cost coverage",
                            "Referral networks",
                            "Automated payment options",
                            "ID protection services"
                          ].map((benefit) => (
                            <div key={benefit} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-4 text-center">
                        Other Policy Options
                      </h3>
                      <p className="text-center text-muted-foreground mb-6">
                        By bundling auto and other policies from Farmers GroupSelect, you could save even more!
                      </p>
                      <div className="flex flex-wrap justify-center gap-3">
                        {["RV", "Renters", "Motorcycle", "Boat", "Condo"].map((option) => (
                          <Badge key={option} variant="secondary" className="text-sm px-4 py-2">
                            {option}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Card className="bg-blue-50 border-blue-200 p-6">
                      <h3 className="text-xl font-bold text-abc-primary mb-4">
                        Get Your Free Quote
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Call or visit online to see how much you could save.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          size="lg"
                          className="bg-abc-blue hover:bg-abc-blue/90"
                          asChild
                        >
                          <a href="tel:844-530-0656">
                            Call 844-530-0656
                          </a>
                        </Button>
                        <Button 
                          size="lg"
                          variant="outline"
                          asChild
                        >
                          <a href="https://farmers.com/groupselect" target="_blank" rel="noopener noreferrer">
                            Visit farmers.com/groupselect
                          </a>
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4">
                        <strong>Live in California?</strong> Please call 855-922-2308 for more details about auto and home insurance that may be available to you outside this program.
                      </p>
                    </Card>

                    <div className="text-xs text-muted-foreground border-t pt-6 space-y-2">
                      <p>
                        *Based on average nationwide annual savings of new Farmers GroupSelect® customers surveyed from 2/1/23 to 9/19/24 who switched their auto insurance policies to Farmers GroupSelect branded policies, responded to the survey, and realized savings. Potential savings vary by customer and may vary by state and product.
                      </p>
                      <p>
                        Home insurance has limited availability in MA and is not part of the Farmers GroupSelect program in FL or CA.
                      </p>
                      <p>
                        Repairs necessitated by covered losses performed by shops in our network of optional service providers are guaranteed by the repair shop for as long as you own your vehicle. Choice of repair shop is always up to the insured.
                      </p>
                      <p>
                        Identity protection services are not available to auto customers in NC or NH nor with all policy forms. Identity protection services are available in NC homeowners policies with the optional "Identity Theft Expense and Resolution Plus" endorsement for an additional premium.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Identity Protection Tab */}
              <TabsContent value="identity" className="space-y-8">
                <Card className="p-6 md:p-8">
                  <div className="flex items-center justify-center mb-8">
                    <img src={allstateLogo} alt="Allstate Identity Protection" className="h-24 md:h-32" />
                  </div>
                  
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-abc-primary mb-4">
                        Get identity protection for real life.
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        There's nothing more valuable than your identity. It's easy to get started.
                      </p>
                    </div>

                    <Card className="bg-gradient-to-br from-red-50 to-orange-50 p-6 border-red-200">
                      <p className="text-muted-foreground leading-relaxed">
                        More than <strong>422 million individuals</strong> in the United States were impacted by cybercrime in 2022 alone. Unfortunately, even someone who knows how to minimize their exposure may still be at risk. That's why your company provides <strong>Allstate Identity Protection Pro+ Cyber</strong> as a benefit.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-4">
                        For over 90 years, Allstate has been protecting what matters most. Now get comprehensive identity monitoring and fraud resolution, plus award-winning cyber protection designed to help you protect yourself and your family against today's digital threats.
                      </p>
                    </Card>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-6">
                        Prepare for what's next with:
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          {
                            title: "Identity Monitoring",
                            description: "Identity, financial account, and credit monitoring"
                          },
                          {
                            title: "Cyber Protection",
                            description: "Cyber protection for mobile and desktop devices"
                          },
                          {
                            title: "24/7 Support",
                            description: "24/7 support, plus up to $1 million in fraud expense reimbursement — or up to $2 million for families"
                          }
                        ].map((feature) => (
                          <Card key={feature.title} className="p-5 border-2 border-primary/20 hover:border-primary/40 transition-colors">
                            <div className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-bold text-abc-primary mb-2">{feature.title}</h4>
                                <p className="text-sm text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-6">
                        It's easy to get started:
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          { step: "1", title: "Sign up", description: "Create your account", link: "https://www.myaip.com/abccatering" },
                          { step: "2", title: "Activate", description: "Activate key features" },
                          { step: "3", title: "Live Protected", description: "Live your best life online" }
                        ].map((item) => (
                          <Card key={item.step} className="p-4 text-center border-2 border-primary/20 hover:border-primary/40 transition-colors">
                            <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                              {item.step}
                            </div>
                            <h4 className="font-bold text-abc-primary mb-2">{item.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            {item.link && (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-xs text-abc-blue hover:underline font-medium break-all"
                              >
                                www.myaip.com/abccatering
                              </a>
                            )}
                          </Card>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Cyber Protection */}
                      <Card className="p-6 border-2 border-primary/20">
                        <h3 className="text-2xl font-bold text-abc-primary mb-4">
                          Cyber Protection
                        </h3>
                        <p className="text-muted-foreground mb-4 font-semibold">
                          Device protection tools for up to 5 devices:
                        </p>
                        <div className="space-y-2">
                          {[
                            "Anti-virus protection",
                            "Missing and stolen device tools",
                            "Safe browsing",
                            "Phishing protection",
                            "Anti-tracker",
                            "Network security protection",
                            "Password manager",
                            "Military-grade VPN with 4000+ servers",
                            "Webcam protection"
                          ].map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>

                      {/* Identity & Financial Monitoring */}
                      <Card className="p-6 border-2 border-primary/20">
                        <h3 className="text-2xl font-bold text-abc-primary mb-4">
                          Identity & Financial Monitoring
                        </h3>
                        <div className="space-y-2">
                          {[
                            "Identity Health Status at-a-glance",
                            "Security updates and education on scams",
                            "Social media account takeover monitoring",
                            "Family digital safety tools (30+ apps)",
                            "TransUnion credit report lock",
                            "Dark web monitoring",
                            "24/7 full-service remediation support",
                            "Up to $1M expense reimbursement",
                            "Ransomware expense reimbursement"
                          ].map((feature) => (
                            <div key={feature} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </Card>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-abc-primary mb-6 text-center">
                        Plans and Pricing
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                          <div className="text-center mb-4">
                            <h4 className="text-xl font-bold text-abc-primary mb-2">Individual Plan</h4>
                            <div className="text-3xl font-bold text-abc-blue">$9.50</div>
                            <div className="text-sm text-muted-foreground">per person / month</div>
                          </div>
                          <div className="space-y-2">
                            {[
                              "Allstate Digital Footprint®",
                              "Robocall blocker",
                              "Ad blocker"
                            ].map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </Card>

                        <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                          <div className="text-center mb-4">
                            <h4 className="text-xl font-bold text-abc-primary mb-2">Family Plan</h4>
                            <div className="text-3xl font-bold text-abc-blue">$17.50</div>
                            <div className="text-sm text-muted-foreground">per family / month</div>
                          </div>
                          <div className="space-y-2">
                            {[
                              "Everything in Individual Plan",
                              "Tri-bureau credit monitoring",
                              "Annual reporting and credit score",
                              "Up to $2M reimbursement"
                            ].map((feature) => (
                              <div key={feature} className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </Card>
                      </div>
                    </div>

                    <Card className="bg-blue-50 border-blue-200 p-6">
                      <h3 className="text-xl font-bold text-abc-primary mb-4">
                        Questions?
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        Contact Allstate Identity Protection for more information or to get started.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          size="lg"
                          className="bg-abc-blue hover:bg-abc-blue/90"
                          asChild
                        >
                          <a href="tel:1-800-789-2720">
                            Call 1-800-789-2720
                          </a>
                        </Button>
                        <Button 
                          size="lg"
                          variant="outline"
                          asChild
                        >
                          <a href="https://myaip.com" target="_blank" rel="noopener noreferrer">
                            Visit myaip.com
                          </a>
                        </Button>
                      </div>
                    </Card>

                    <div className="text-xs text-muted-foreground border-t pt-6 space-y-2">
                      <p>
                        * Does not cover cyber ransom payments to hackers.
                      </p>
                      <p>
                        † Some features require additional activation. Privacy management features cover up to five email addresses in a family plan. Robocall blocker and ad blocker can only be used by primary subscriber, even in a family plan.
                      </p>
                      <p>
                        Δ Only available with a family plan. Cyber and family digital safety features are managed through the primary subscriber's account in family plans.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Legal Plan Tab */}
              <TabsContent value="legal" className="space-y-8">
                <div className="space-y-8">
                  {/* Header Section */}
                  <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-abc-primary">
                      MetLaw® Legal Plan
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                      Smart. Simple. Affordable legal coverage for you, your spouse and dependents.
                    </p>
                    <div className="flex justify-center pt-2">
                      <Button
                        size="lg"
                        className="bg-abc-blue hover:bg-abc-blue/90"
                        asChild
                      >
                        <a href="/MetLaw_Legal_Plan_Booklet.pdf" download="MetLaw_Legal_Plan_Booklet.pdf">
                          <Download className="mr-2 h-5 w-5" />
                          Download Legal Plan Booklet
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Key Features */}
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold text-abc-primary mb-4">
                      What's Included
                    </h3>
                    <div className="grid gap-4 text-muted-foreground">
                      <div className="flex items-start gap-3">
                        <div className="text-abc-blue mt-1">✓</div>
                        <p>Telephone and office consultations</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-abc-blue mt-1">✓</div>
                        <p>E-Services including attorney locator, law firm e-panel, law guide, free downloadable legal documents</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="text-abc-blue mt-1">✓</div>
                        <p>Financial planning, insurance and work/life resources</p>
                      </div>
                    </div>
                  </Card>

                  {/* Coverage Areas */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-abc-primary">
                      Coverage Areas
                    </h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Estate Planning Documents */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Estate Planning Documents</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Simple and Complex Wills</li>
                          <li>• Trusts (Revocable and Irrevocable)</li>
                          <li>• Powers of Attorney (Healthcare, Financial, Childcare)</li>
                          <li>• Healthcare Proxies</li>
                          <li>• Living Wills</li>
                          <li>• Codicils</li>
                        </ul>
                      </Card>

                      {/* Document Review */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Document Review</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Any Personal Legal Documents</li>
                        </ul>
                      </Card>

                      {/* Family Law */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Family Law</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Prenuptial Agreement</li>
                          <li>• Protection from Domestic Violence</li>
                          <li>• Adoption and Legalization</li>
                          <li>• Guardianship or Conservatorship</li>
                          <li>• Name Change</li>
                        </ul>
                      </Card>

                      {/* Immigration Assistance */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Immigration Assistance</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Advice and Consultation</li>
                          <li>• Review of Immigration Documents</li>
                          <li>• Preparation of Affidavits and Powers of Attorney</li>
                        </ul>
                      </Card>

                      {/* Elder Law Matters */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Elder Law Matters</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Consultations and Document Review for issues related to your parents including Medicare, Medicaid, Prescription Plans, Nursing Home Agreements, leases, notes, deeds, wills, and powers of attorney as these affect the participant</li>
                        </ul>
                      </Card>

                      {/* Real Estate Matters */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Real Estate Matters</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Sale, Purchase or Refinancing of Your Primary, Second or Vacation Home</li>
                          <li>• Eviction and Tenant Problems (Primary Residence)</li>
                          <li>• Home Equity Loans for Your Primary, Second or Vacation Home</li>
                          <li>• Zoning Applications</li>
                          <li>• Boundary or Title Disputes</li>
                          <li>• Property Tax Assessment</li>
                          <li>• Security Deposit Assistance (For Tenant)</li>
                        </ul>
                      </Card>

                      {/* Document Preparation */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Document Preparation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Affidavits</li>
                          <li>• Deeds</li>
                          <li>• Demand Letters</li>
                          <li>• Mortgages</li>
                          <li>• Promissory Notes</li>
                        </ul>
                      </Card>

                      {/* Traffic Offenses */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Traffic Offenses*</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Defense of Traffic Tickets (excludes DUI)</li>
                          <li>• Driving Privilege Restoration (Includes License Suspension due to DUI)</li>
                        </ul>
                      </Card>

                      {/* Personal Property Protection */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Personal Property Protection</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Consultations and Document Review for Personal Property Issues</li>
                          <li>• Assistance for disputes over goods and services</li>
                        </ul>
                      </Card>

                      {/* Financial Matters */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Financial Matters</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Negotiations with Creditors</li>
                          <li>• Debt Collection Defense</li>
                          <li>• Identity Theft Defense</li>
                          <li>• LifeStages - Identity Management Services</li>
                          <li>• Personal Bankruptcy</li>
                          <li>• Tax Audit Representation (Municipal, State or Federal)</li>
                          <li>• Foreclosure Defense</li>
                          <li>• Tax Collection Defense</li>
                        </ul>
                      </Card>

                      {/* Juvenile Matters */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Juvenile Matters</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Juvenile Court Defense, including Criminal Matters</li>
                          <li>• Parental Responsibility Matters</li>
                        </ul>
                      </Card>

                      {/* Defense of Civil Lawsuits */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Defense of Civil Lawsuits</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Administrative Hearings</li>
                          <li>• Civil Litigation Defense</li>
                          <li>• Incompetency Defense</li>
                          <li>• School Hearings</li>
                          <li>• Pet Liabilities</li>
                        </ul>
                      </Card>

                      {/* Consumer Protection */}
                      <Card className="p-6">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Consumer Protection</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Disputes over Consumer Goods and Services</li>
                          <li>• Small Claims Assistance</li>
                        </ul>
                      </Card>

                      {/* Family Matters */}
                      <Card className="p-6 bg-gradient-to-br from-abc-blue/5 to-transparent border-abc-blue/20">
                        <h4 className="text-xl font-bold text-abc-primary mb-4">Family Matters™*</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>• Available for an additional fee</li>
                          <li>• Separate plan for parents of participants for Estate Planning Documents</li>
                          <li>• Easy Enrollment - online or by phone</li>
                        </ul>
                      </Card>
                    </div>
                  </div>

                  {/* Additional Services */}
                  <Card className="p-6 bg-gradient-to-br from-abc-blue/5 to-transparent">
                    <h3 className="text-2xl font-bold text-abc-primary mb-4">
                      Additional Services
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-bold text-abc-blue mb-2">Document Review & Preparation</h4>
                        <p className="text-sm text-muted-foreground">
                          Any personal legal documents, affidavits, deeds, demand letters, mortgages, and promissory notes
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-abc-blue mb-2">Juvenile Matters</h4>
                        <p className="text-sm text-muted-foreground">
                          Juvenile court defense, including criminal matters and parental responsibility matters
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-abc-blue mb-2">Family Matters™</h4>
                        <p className="text-sm text-muted-foreground">
                          Available for an additional fee - separate plan for parents of participants for Estate Planning Documents
                        </p>
                      </div>
                    </div>
                  </Card>

                  {/* Contact Information */}
                  <Card className="p-6 bg-abc-primary/5">
                    <h3 className="text-2xl font-bold text-abc-primary mb-4">
                      For More Information
                    </h3>
                    <div className="space-y-4 text-muted-foreground">
                      <div className="flex flex-col md:flex-row md:items-center gap-4">
                        <div className="flex-1">
                          <p className="font-semibold mb-2">Visit our website:</p>
                          <a 
                            href="https://info.legalplans.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-abc-blue hover:underline"
                          >
                            info.legalplans.com
                          </a>
                          <p className="text-sm mt-1">Access code: <span className="font-bold">Legal</span></p>
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold mb-2">Call our Client Service Center:</p>
                          <a href="tel:1-800-821-6400" className="text-abc-blue hover:underline text-lg font-bold">
                            1-800-821-6400
                          </a>
                          <p className="text-sm mt-1">Monday - Friday, 8 a.m. - 7 p.m. (Eastern Time)</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Disclaimer */}
                  <div className="text-xs text-muted-foreground bg-muted/30 p-4 rounded-lg">
                    <p className="mb-2">
                      Group legal plans and Family Matters provided by Hyatt Legal Plans, Inc., a MetLife company, Cleveland, Ohio. In certain states, group legal plans and Family Matters provided through insurance coverage underwritten by Metropolitan Property and Casualty Insurance Company and Affiliates, Warwick, Rhode Island.
                    </p>
                    <p>
                      Please contact Hyatt Legal Plans for complete details on covered services including trials. Certain exclusions apply. For all other personal legal matters, an advice and consultation benefit is provided.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdditionalVoluntaryBenefits;
