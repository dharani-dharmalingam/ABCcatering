import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SummaryBenefitsChanges = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-6 py-16">
        <div className="mb-6 print:hidden">
          <Link to="/benefits">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 md:mr-2" />
              <span className="hidden md:inline">Back to Benefits</span>
            </Button>
          </Link>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">What's Changing for 2026</h1>
          
          {/* Vision Plan Consolidation */}
          <Card className="p-6 md:p-8 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Consolidation of Vision plan to one provider – VSP</h2>
            <p className="text-foreground/90 leading-relaxed">
              Starting in 2026, we're streamlining our vision coverage by moving to a single provider, Vision Service Plan (VSP).
              This change simplifies your choices and gives all employees access to VSP's broad national network, which includes 
              both private practice eye doctors and major retail locations.
            </p>
          </Card>

          {/* Enhanced Vision Option */}
          <Card className="p-6 md:p-8 border-l-4 border-l-primary bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">Addition of Enhanced Vision option</h2>
            <p className="text-foreground/90 leading-relaxed">
              We're introducing a new Enhanced Vision Plan through VSP for those who want extra coverage and flexibility. 
              The enhanced option offers higher frame and contact lens allowances and expanded benefits for specialized lenses, 
              making it a great choice if you or your family members need vision correction or prefer designer frames.
            </p>
          </Card>

          {/* Adult Orthodontia */}
          <Card className="p-6 md:p-8 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">Adult Orthodontia on Enhanced Dental Plan</h2>
            <p className="text-foreground/90 leading-relaxed">
              The Enhanced Dental Plan now includes Adult Orthodontia coverage, providing reimbursement for braces or other
              orthodontic treatment beyond age 19. This addition helps support a wider range of dental health needs for you 
              and your family.
            </p>
          </Card>

          {/* HSA and FSA to Fidelity */}
          <Card className="p-6 md:p-8 border-l-4 border-l-primary bg-primary/5">
            <h2 className="text-2xl font-bold text-foreground mb-4">HSA and FSA moving to Fidelity</h2>
            <p className="text-foreground/90 leading-relaxed">
              To make managing your pre-tax accounts easier, both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA) 
              will transition to Fidelity in 2026. Fidelity's intuitive online tools and app will allow you to view balances,
              submit claims, and track spending all in one place.
            </p>
          </Card>

          {/* 401(k) to Fidelity */}
          <Card className="p-6 md:p-8 border-l-4 border-l-primary">
            <h2 className="text-2xl font-bold text-foreground mb-4">401(k) transitioning to Fidelity</h2>
            <p className="text-foreground/90 leading-relaxed">
              We're also moving our 401(k) Retirement Savings Plan from John Hancock to Fidelity Investments. This change brings 
              all your savings and investment tools under one trusted financial partner, offering enhanced planning resources, 
              educational support, and a seamless experience between your retirement and health savings accounts.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SummaryBenefitsChanges;