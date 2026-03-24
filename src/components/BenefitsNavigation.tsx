import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { benefitChapters } from "@/config/benefitsChapters";

interface BenefitsNavigationProps {
  currentRoute: string;
}

const BenefitsNavigation = ({ currentRoute }: BenefitsNavigationProps) => {
  const currentIndex = benefitChapters.findIndex(
    (chapter) => chapter.route === currentRoute
  );

  if (currentIndex === -1) return null;

  const previousChapter = currentIndex > 0 ? benefitChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < benefitChapters.length - 1 ? benefitChapters[currentIndex + 1] : null;

  return (
    <div className="border-t border-border pt-8 mt-12 print:hidden">
      <div className="flex justify-between items-center gap-4">
        {previousChapter ? (
          <Link to={previousChapter.route}>
            <Button
              variant="outline"
              className="group hover:border-primary transition-all md:w-auto md:justify-start md:px-4"
              size="icon"
            >
              <ChevronLeft className="h-5 w-5 md:mr-2 group-hover:-translate-x-1 transition-transform flex-shrink-0" />
              <div className="text-left min-w-0 hidden md:block">
                <div className="text-xs text-muted-foreground">Previous</div>
                <div className="font-semibold truncate">{previousChapter.title}</div>
              </div>
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {nextChapter ? (
          <Link to={nextChapter.route}>
            <Button
              variant="outline"
              className="group hover:border-primary transition-all md:w-auto md:justify-end md:px-4"
              size="icon"
            >
              <div className="text-right min-w-0 hidden md:block">
                <div className="text-xs text-muted-foreground">Next</div>
                <div className="font-semibold truncate">{nextChapter.title}</div>
              </div>
              <ChevronRight className="h-5 w-5 md:ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </Button>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default BenefitsNavigation;
