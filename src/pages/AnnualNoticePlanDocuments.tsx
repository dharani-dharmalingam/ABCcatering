import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";

interface Document {
  title: string;
  description: string;
  url: string;
  type: "pdf" | "link";
  pdfUrl?: string;
}

const documents: Document[] = [
  {
    title: "ABC Catering Annual Notice Documents",
    description: "Required annual notices for ABC Catering employees.",
    url: "/documents/ABC_Catering_Annual_Notices.pdf",
    type: "pdf"
  },
  {
    title: "PPO Schedule of Benefits",
    description: "Summary of benefits for the 2026 PPO medical plan.",
    url: "/documents/ABC_Catering_PPO_Schedule_of_Benefits.pdf",
    type: "pdf"
  },
  {
    title: "Dental Plan Benefit Summary",
    description: "Summary of benefits for the MetLife dental plan.",
    url: "/documents/ABC_Catering_Dental_Plan_Summary.pdf",
    type: "pdf"
  },
  {
    title: "Vision Plan Benefit Summary",
    description: "Summary of benefits for the VSP vision plan.",
    url: "/documents/ABC_Catering_Vision_Plan_Summary.pdf",
    type: "pdf"
  },
  {
    title: "FSA Summary Plan Description",
    description: "Summary plan description for Flexible Spending Accounts.",
    url: "/documents/ABC_Catering_FSA_Summary_Plan.pdf",
    type: "pdf"
  },
  {
    title: "401(k) Summary Annual Report 2024",
    description: "Annual summary report for the 401(k) retirement plan.",
    url: "/documents/ABC_Catering_401k_Summary_Annual_Report.pdf",
    type: "pdf"
  },
];

const AnnualNoticePlanDocuments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="py-8 md:py-12 lg:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 md:mb-8">
            <Link to="/benefits">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Benefits
              </Button>
            </Link>
          </div>

          {/* Page Title */}
          <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-abc-primary">
              2026 Annual Notice-Plan Documents
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access important annual notice and plan documents for 2026.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">{documents.length}</span> documents available
            </p>
          </div>

          {/* Document Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border hover:-translate-y-1 flex flex-col">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg shrink-0">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {doc.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1">
                  <p className="text-sm text-muted-foreground mb-4">
                    {doc.description}
                  </p>
                  <div className="mt-auto flex flex-col gap-2">
                    <a
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {doc.type === "pdf" ? (
                        <>
                          <Download className="h-4 w-4" />
                          View / Download PDF
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          Open Link
                        </>
                      )}
                    </a>
                    {doc.pdfUrl && (
                      <a
                        href={doc.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Open FlippingBook
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Benefits Navigation */}
          <div className="mt-12">
            <BenefitsNavigation currentRoute="/benefits/annual-notice-plan-documents" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AnnualNoticePlanDocuments;