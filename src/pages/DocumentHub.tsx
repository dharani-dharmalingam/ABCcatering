import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Download, ExternalLink, LayoutGrid, List } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BenefitsNavigation from "@/components/BenefitsNavigation";

interface Document {
  title: string;
  description: string;
  url: string;
  type: "pdf" | "link";
  pdfUrl?: string; // Optional PDF URL for link-type documents that also have a PDF
}

const documents: Document[] = [
  {
    title: "2026 ABC Catering Benefits Guide",
    description: "Comprehensive guide to all available benefits for 2026.",
    url: "/ABC_2026_Benefit_Guide.pdf",
    type: "pdf"
  },
  {
    title: "Annual Notice Documents",
    description: "Required annual notices for ABC Catering employees.",
    url: "/documents/ABC_Catering_Annual_Notices.pdf",
    type: "pdf"
  },
  {
    title: "401(k) Summary Annual Report 2024",
    description: "Annual summary report for the 401(k) retirement plan.",
    url: "/documents/ABC_Catering_401k_Summary_Annual_Report.pdf",
    type: "pdf"
  },
  {
    title: "PPO Schedule of Benefits",
    description: "Schedule of benefits for the PPO medical plan.",
    url: "/documents/ABC_Catering_PPO_Schedule_of_Benefits.pdf",
    type: "pdf"
  },
  {
    title: "Dental Plan Benefit Summary",
    description: "Benefit summary for the MetLife dental plan.",
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
    title: "Employee Assistance Program (EAP)",
    description: "Information about EAP services through Health Advocate.",
    url: "/documents/ABC_Catering_EAP_Services.pdf",
    type: "pdf"
  },
  {
    title: "Life & AD&D Certificate of Coverage",
    description: "Certificate of Coverage for Life and AD&D insurance.",
    url: "/documents/ABC_Catering_Life_ADD_Certificate.pdf",
    type: "pdf"
  },
  {
    title: "Long-Term Disability Certificate of Coverage",
    description: "Certificate of Coverage for Long-Term Disability insurance.",
    url: "/documents/ABC_Catering_LTD_Certificate.pdf",
    type: "pdf"
  },
  {
    title: "FSA Summary Plan Description",
    description: "Summary plan description for Flexible Spending Accounts.",
    url: "/documents/ABC_Catering_FSA_Summary_Plan.pdf",
    type: "pdf"
  },
];

const DocumentHub = () => {
  const [viewMode, setViewMode] = useState<"tile" | "list">("tile");

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
              Document Hub
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access important benefit documents, forms, and resources in one convenient location.
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-primary">9</span> documents and <span className="font-semibold text-primary">1</span> link available
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-end mb-6">
            <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
              <Button
                variant={viewMode === "tile" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("tile")}
                className="gap-2"
              >
                <LayoutGrid className="h-4 w-4" />
                <span className="hidden sm:inline">Tile</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="gap-2"
              >
                <List className="h-4 w-4" />
                <span className="hidden sm:inline">List</span>
              </Button>
            </div>
          </div>

          {/* Tile View */}
          {viewMode === "tile" && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {documents.map((doc, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-border hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {doc.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {doc.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
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
                          <Download className="h-4 w-4" />
                          View / Download PDF
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === "list" && (
            <div className="space-y-3">
              {documents.map((doc, index) => (
                <Card key={index} className="group hover:shadow-md transition-all duration-200 border border-border">
                  <div className="flex items-center gap-4 p-4">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-muted-foreground truncate">
                        {doc.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          {doc.type === "pdf" ? (
                            <>
                              <Download className="h-4 w-4" />
                              <span className="hidden sm:inline">Download</span>
                            </>
                          ) : (
                            <>
                              <ExternalLink className="h-4 w-4" />
                              <span className="hidden sm:inline">Open</span>
                            </>
                          )}
                        </Button>
                      </a>
                      {doc.pdfUrl && (
                        <a
                          href={doc.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="outline" size="sm" className="gap-2">
                            <Download className="h-4 w-4" />
                            <span className="hidden sm:inline">PDF</span>
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Benefits Navigation */}
          <div className="mt-12">
            <BenefitsNavigation currentRoute="/benefits/document-hub" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DocumentHub;
