import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";

const PaidTimeOff = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Banner */}
      <section className="relative h-48 md:h-56 bg-gradient-to-r from-gray-600 to-gray-700 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/lovable-uploads/63c41384-dae8-42cd-8609-b6c72f8495f6.png" 
            alt="Paid Time Off" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800/70 to-gray-600/50" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-4 px-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
            Paid Time Off and Other Benefits
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Vacation, sick leave, and personal time policies
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

        {/* CTA Section */}
        <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 print:hidden">
          <h2 className="text-xl font-bold text-abc-primary mb-4">
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
          </div>
        </Card>

        {/* Holidays Section */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-abc-primary">Holidays</h2>
          <p className="text-foreground mb-4">
            ABC Catering observes the following holidays and benefit eligible associates receive paid time off in observance of these occasions:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li>New Year's Day</li>
            <li>Martin Luther King Jr. Day</li>
            <li>Memorial Day</li>
            <li>Independence Day</li>
            <li>Labor Day</li>
            <li>Thanksgiving</li>
            <li>Day after Thanksgiving</li>
            <li>Christmas Day</li>
          </ul>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Floating Holiday</h3>
          <p className="text-foreground mb-2">
            In addition to ABC Catering's 8 observed Holidays, benefits eligible associates will receive one additional floating holiday per accrual year.
          </p>
          <p className="text-foreground mb-6">
            The floating holiday provides one additional day that can be utilized at any point during the year.
          </p>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Religious Holidays</h3>
          <p className="text-foreground mb-2">
            ABC Catering supports our culturally diverse workforce and recognizes the importance of religious holidays.
          </p>
          <p className="text-foreground">
            Associates practicing culturewide or nationally recognized activities pertaining to religion which fall outside of the observed holidays referenced above, may utilize available Vacation or their Floating Holiday (not Personal Leave or Holiday) in observance. Prior notice to the associate's supervisor is required.
          </p>
        </Card>

        {/* Time Away Section */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-abc-primary">Time Away</h2>
          <p className="text-foreground mb-6">
            Vacation allowance is based on your tenure with ABC Catering and credited on your date of hire and each January thereafter, as shown on the following schedule:
          </p>

          <div className="overflow-x-auto mb-6">
            <Table className="border border-primary/20">
              <TableHeader>
                <TableRow className="bg-abc-blue hover:bg-abc-blue">
                  <TableHead className="font-semibold text-white">Years of Service</TableHead>
                  <TableHead className="font-semibold text-white text-center">Vacation Entitlement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-primary/5">
                  <TableCell className="font-semibold" colSpan={2}>New Hire Accrual</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>Less than 1 year</TableCell>
                  <TableCell className="text-center">3.07 hours per payroll period</TableCell>
                </TableRow>
                <TableRow className="bg-primary/5">
                  <TableCell className="font-semibold" colSpan={2}>Date of Hire through end of Accrual Year</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>1 but less than 3 years</TableCell>
                  <TableCell className="text-center">10 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>3 but less than 5 years</TableCell>
                  <TableCell className="text-center">12 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>5 but less than 7 years</TableCell>
                  <TableCell className="text-center">15 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>7 but less than 9 years</TableCell>
                  <TableCell className="text-center">16 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>9 but less than 12 years</TableCell>
                  <TableCell className="text-center">17 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>12 but less than 15 years</TableCell>
                  <TableCell className="text-center">18 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>15 but less than 20 years</TableCell>
                  <TableCell className="text-center">19 days</TableCell>
                </TableRow>
                <TableRow className="hover:bg-primary/10">
                  <TableCell>20 years or more</TableCell>
                  <TableCell className="text-center">20 days</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Accrual</h3>
          <ul className="space-y-3">
            <li className="text-foreground">
              Full vacation allowance is credited to associates at the beginning of each calendar year.
            </li>
            <li className="text-foreground">
              These days are credited on the premise that the associate will work the duration of the year. New hires will receive a prorated value based on hire date.
            </li>
            <li className="text-foreground">
              Benefit eligible, part time associates will receive a prorated value. For example, a part-time associate who works 32 hours per week would be entitled to 64 hours of vacation in their second year of service.
            </li>
          </ul>
        </Card>

        {/* Additional Leave Section */}
        <Card className="p-8">
          <h2 className="text-3xl font-bold mb-6 text-abc-primary">Additional Leave</h2>
          
          <h3 className="text-2xl font-bold text-abc-primary mb-4">Personal Leave (PL)</h3>
          <ul className="space-y-3 mb-6">
            <li className="text-foreground">
              Available to associates for reasons such as personal illness, family emergencies, medical appointments, and other situations.
            </li>
            <li className="text-foreground">
              PL days are credited at the start of each accrual year (or upon hire, if applicable), based on the expectation that the associate will work the full year and meet their minimum standard annual hours.
            </li>
            <li className="text-foreground">
              Holidays that occur during PL will be reported as holidays.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Leave Bank (LB)</h3>
          <ul className="space-y-3 mb-6">
            <li className="text-foreground">
              Unused Personal Leave in the calendar year will be transferred into a Leave Bank.
            </li>
            <li className="text-foreground">
              A maximum of 240 hours may accumulate in the leave bank.
            </li>
            <li className="text-foreground">
              The Leave Bank may be accessed only for qualified unpaid FMLA leaves of absence.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Paid Parental Leave (PPL)</h3>
          <p className="text-foreground mb-4">
            ABC Catering offers Paid Parental Leave (PPL) for benefit eligible associates to care for and bond with a newborn of up to two weeks for the birth (including surrogacy) or adoption of a child aged 17 and under.
          </p>
          <p className="text-foreground mb-2">
            Associates are entitled to up to three (3) weeks of parental leave, upon approval, as follows:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
            <li className="text-foreground">
              PPL of up to two (2) weeks of paid leave per birth or adoption, regardless of multiple births or adoptions.
            </li>
            <li className="text-foreground">
              Associates with accrued hours in their carryover LB, can use up to 40 hours, or one (1) week to receive an equivalent of a third week of paid time off.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Bereavement Leave</h3>
          <p className="text-foreground mb-2">
            ABC Catering provides up to 3 days of Bereavement Leave for each qualifying event for benefit-eligible associates for the death or imminent death of immediate family members.
          </p>
          <p className="text-foreground mb-6">
            The immediate family includes the associate's spouse, domestic partner, child, parent, stepparent, sibling, grandparents, grandchild, or the child, sibling, or parents of the associate's spouse or domestic partner.
          </p>

          <h3 className="text-2xl font-bold text-abc-primary mb-4 mt-8">Jury Duty</h3>
          <p className="text-foreground mb-2">
            ABC Catering believes that it is every citizen's obligation to serve jury duty when called.
          </p>
          <p className="text-foreground">
            Paid leave is provided to associates for jury duty based on their standard working hours.
          </p>
        </Card>

        <BenefitsNavigation currentRoute="/benefits/paid-time-off" />
      </div>
      <Footer />
    </div>
  );
};

export default PaidTimeOff;
