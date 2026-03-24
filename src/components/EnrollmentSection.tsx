import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import enrollmentHero from "@/assets/enrollment-hero.jpg";
import { useState, useEffect } from "react";

const EnrollmentSection = () => {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const enrollmentEnd = new Date('2025-11-18T23:59:59');
      const now = new Date();
      const timeDiff = enrollmentEnd.getTime() - now.getTime();
      const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };

    calculateDaysLeft();
    const interval = setInterval(calculateDaysLeft, 1000 * 60 * 60); // Update every hour

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="relative py-16 px-6 overflow-hidden min-h-[420px]">
      {/* Background image - enrollment hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${enrollmentHero})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/50 to-white/85" aria-hidden />
      <div className="max-w-[1600px] mx-auto relative z-10">
        <Card className="relative bg-white/95 border border-border p-12 lg:p-20 rounded-3xl shadow-lg overflow-hidden backdrop-blur-sm">
          
          <div className="relative flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Video Section */}
            <div className="flex-1">
              <div className="aspect-video rounded-2xl overflow-hidden print:hidden">
                <VideoPlaceholder title="Open Enrollment Video" className="rounded-2xl" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: 'hsl(213 45% 20%)' }}>
                Open Enrollment is Here!
              </h2>
              <div className="space-y-2">
                <p className="text-lg text-foreground">
                  Review your benefits and make changes for the upcoming year.
                </p>
                <p className="text-base">
                  <span className="font-semibold">Open enrollment:</span> November 5th thru November 18th
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/review-enrollment-checklist'}>
                  Review Enrollment Checklist
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/summary-benefits-changes'}>
                  Discover Benefits Changes
                </Button>
                <Button variant="default" size="lg" onClick={() => window.open('https://portal.abccatering.com/', '_blank')}>
                  Enroll now
                </Button>
              </div>
            </div>

            {/* Right Badge */}
            <div className="flex-shrink-0">
              <Badge 
                variant="secondary" 
                className="text-2xl font-bold px-6 py-4 bg-white border-2 border-border" style={{ color: 'hsl(213 45% 20%)' }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold">{daysLeft}</div>
                  <div className="text-sm">Days left</div>
                </div>
              </Badge>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EnrollmentSection;