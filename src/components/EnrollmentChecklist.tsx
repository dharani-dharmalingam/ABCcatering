import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const EnrollmentChecklist = () => {
  const checklistItems = [
    "Double-check your dependent coverage",
    "Review and update beneficiary elections if needed",
    "Plan ahead for HSA or FSA contributions",
    "Make sure your personal details are accurate and current (home address, contact information, etc.)"
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <Card className="p-8 md:p-12 bg-card shadow-lg">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-abc-primary">
                Let's make sure you are ready to enroll!
              </h2>
              <p className="text-lg text-muted-foreground">
                Review the checklist below before enrolling in your benefits.
              </p>
            </div>

            <div className="space-y-4">
              {checklistItems.map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-abc-blue text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <p className="text-base md:text-lg text-foreground pt-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a href="mailto:hr@abccatering.com" className="inline-block">
                <Button size="lg" className="gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EnrollmentChecklist;
