import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import Benefits from "./pages/Benefits";
import OverviewPlans from "./pages/OverviewPlans";
import EligibilityQualifyingEvents from "./pages/EligibilityQualifyingEvents";
import MedicalPlans from "./pages/MedicalPlans";
import MedicalPlanBCBSPPO from "./pages/MedicalPlanBCBSPPO";
import MedicalPlanBCBSPrimeHDHP from "./pages/MedicalPlanBCBSPrimeHDHP";
import MedicalPlanBCBSAlternativeHDHP from "./pages/MedicalPlanBCBSAlternativeHDHP";
import DentalBenefits from "./pages/DentalBenefits";
import VisionBenefits from "./pages/VisionBenefits";
import EmployeeAssistanceProgram from "./pages/EmployeeAssistanceProgram";
import FsaHsa from "./pages/FsaHsa";
import SurvivorBenefits from "./pages/SurvivorBenefits";
import SupplementalHealth from "./pages/SupplementalHealth";
import IncomeProtection from "./pages/IncomeProtection";
import FinancialWellbeing from "./pages/FinancialWellbeing";
import RetirementPlanning from "./pages/RetirementPlanning";
import PaidTimeOff from "./pages/PaidTimeOff";
import AdditionalVoluntaryBenefits from "./pages/AdditionalVoluntaryBenefits";
import AdditionalCoverageOptions from "./pages/AdditionalCoverageOptions";
import DocumentHub from "./pages/DocumentHub";
import AnnualNoticePlanDocuments from "./pages/AnnualNoticePlanDocuments";
import ImportantContacts from "./pages/ImportantContacts";
import ReviewEnrollmentChecklist from "./pages/ReviewEnrollmentChecklist";
import SummaryBenefitsChanges from "./pages/SummaryBenefitsChanges";
import BenefitsAtAGlance from "./pages/BenefitsAtAGlance";
import NotFound from "./pages/NotFound";
import FloatingAIButton from "./components/FloatingAIButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/benefits/overview-plans" element={<OverviewPlans />} />
          <Route path="/benefits/eligibility-qualifying-events" element={<EligibilityQualifyingEvents />} />
          <Route path="/benefits/medical-plans" element={<MedicalPlans />} />
          <Route path="/benefits/medical-plan-bcbs-ppo" element={<MedicalPlanBCBSPPO />} />
          <Route path="/benefits/medical-plan-bcbs-prime-hdhp" element={<MedicalPlanBCBSPrimeHDHP />} />
          <Route path="/benefits/medical-plan-bcbs-alternative-hdhp" element={<MedicalPlanBCBSAlternativeHDHP />} />
          <Route path="/benefits/dental-benefits" element={<DentalBenefits />} />
          <Route path="/benefits/vision-benefits" element={<VisionBenefits />} />
          <Route path="/benefits/employee-assistance-program" element={<EmployeeAssistanceProgram />} />
          <Route path="/benefits/fsa-hsa" element={<FsaHsa />} />
          <Route path="/benefits/survivor-benefits" element={<SurvivorBenefits />} />
          <Route path="/benefits/supplemental-health" element={<SupplementalHealth />} />
          <Route path="/benefits/income-protection" element={<IncomeProtection />} />
          <Route path="/benefits/financial-wellbeing" element={<FinancialWellbeing />} />
          <Route path="/benefits/retirement-planning" element={<RetirementPlanning />} />
          <Route path="/benefits/paid-time-off" element={<PaidTimeOff />} />
          <Route path="/benefits/additional-voluntary-benefits" element={<AdditionalVoluntaryBenefits />} />
          <Route path="/benefits/additional-coverage-options" element={<AdditionalCoverageOptions />} />
          <Route path="/benefits/document-hub" element={<DocumentHub />} />
          <Route path="/benefits/annual-notice-plan-documents" element={<AnnualNoticePlanDocuments />} />
          <Route path="/important-contacts" element={<ImportantContacts />} />
          <Route path="/review-enrollment-checklist" element={<ReviewEnrollmentChecklist />} />
          <Route path="/summary-benefits-changes" element={<SummaryBenefitsChanges />} />
          <Route path="/benefits-at-a-glance" element={<BenefitsAtAGlance />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingAIButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
