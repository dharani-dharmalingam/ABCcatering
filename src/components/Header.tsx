import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import { benefitChapters } from "@/config/benefitsChapters";

const Header = () => {
  return (
    <header className="py-3 md:py-4 px-4 md:px-6 bg-white border-b border-primary/20 print:hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-3 md:gap-4">
          <Link to="/" className="md:justify-self-start hover:opacity-80 transition-opacity">
            <img
              src="/assets/abc-catering-logo.webp"
              alt="ABC Catering"
              className="h-12 md:h-16 w-auto"
            />
          </Link>
          
          <div className="w-full md:justify-self-center md:max-w-md">
            <SearchBar chapters={benefitChapters} />
          </div>


        </div>
      </div>
    </header>
  );
};

export default Header;
