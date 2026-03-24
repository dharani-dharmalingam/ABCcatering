import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ComplianceSection = () => {
  const complianceItems = [
    {
      id: "hipaa",
      title: "HIPAA Privacy Notice",
      content: "Information about how your health information is protected and used."
    },
    {
      id: "cobra", 
      title: "COBRA Rights",
      content: "Details about your rights to continue health coverage under COBRA."
    },
    {
      id: "medicare",
      title: "Medicare Part D Creditable Coverage", 
      content: "Information about creditable prescription drug coverage."
    },
    {
      id: "chipra",
      title: "CHIPRA",
      content: "Children's Health Insurance Program Reauthorization Act information."
    },
    {
      id: "womens-health",
      title: "Women's Health and Cancer Rights Act",
      content: "Rights and protections under the Women's Health and Cancer Rights Act."
    },
    {
      id: "newborns",
      title: "Newborns' and Mothers' Health Protection Act",
      content: "Protections for new mothers and newborns under federal law."
    },
    {
      id: "marketplace",
      title: "Notice of Marketplace Coverage Options",
      content: "Information about Health Insurance Marketplace coverage options."
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Legal & Compliance Notices
          </h2>
          <p className="text-lg text-muted-foreground">
            Important regulatory information about your benefits.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 mb-8">
          <Accordion type="single" collapsible className="space-y-2">
            {complianceItems.map((item) => (
              <AccordionItem 
                key={item.id} 
                value={item.id}
                className="border border-border rounded-lg px-4"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;