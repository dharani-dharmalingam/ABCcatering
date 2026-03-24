import { Card } from "@/components/ui/card";
import { ExternalLink, Mail } from "lucide-react";
import employeeBenefitsPortalIcon from "@/assets/employee-benefits-portal.png";
import benefitsGlanceIcon from "@/assets/benefits-glance.png";
import impContactInfoIcon from "@/assets/imp-contact-info.png";

const QuickLinks = () => {
  const quickLinks = [
    {
      title: "UKG",
      icon: employeeBenefitsPortalIcon,
      href: "https://portal.abccatering.com/"
    },
    {
      title: "Important Contact Information",
      icon: impContactInfoIcon,
      href: "/important-contacts"
    },
    {
      title: "Contact Us",
      icon: "mail",
      href: "mailto:hr@abccatering.com"
    }
  ];

  return (
    <section className="py-16 px-6 bg-background print:hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-abc-primary">
            Quick Access
          </h2>
          <p className="text-lg text-muted-foreground">
            Important links and resources for your benefits experience
          </p>
        </div>

        <Card className="p-8 border border-border bg-white shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="flex-shrink-0">
                  {link.icon === "mail" ? (
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  ) : (
                    <img src={link.icon} alt="" className="w-12 h-12" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {link.title}
                  </h3>
                </div>
                {link.href.startsWith('mailto:') ? (
                  <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                ) : (
                  <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
              </a>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default QuickLinks;