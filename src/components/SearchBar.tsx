import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import { searchableContent } from "@/config/searchableContent";
interface Chapter {
  id: number;
  title: string;
  description: string;
  readTime: string;
  route: string;
  keywords: string[];
}

interface SearchResult extends Chapter {
  score: number;
  snippet?: string;
  matchedSection?: string;
}

interface SearchBarProps {
  chapters: Chapter[];
  placeholder?: string;
}

const SearchBar = ({ chapters, placeholder = "Search benefits chapters..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Function to calculate relevance score and extract snippet
  const calculateRelevance = (chapter: Chapter, query: string): SearchResult => {
    const lowerQuery = query.toLowerCase();
    let score = 0;
    let snippet = "";
    let matchedSection = "";

    // Score for title match (highest priority)
    if (chapter.title.toLowerCase().includes(lowerQuery)) {
      score += 100;
    }

    // Score for description match
    if (chapter.description.toLowerCase().includes(lowerQuery)) {
      score += 50;
      snippet = chapter.description;
    }

    // Score for keywords match
    const keywordMatches = chapter.keywords.filter(kw => 
      kw.toLowerCase().includes(lowerQuery)
    );
    score += keywordMatches.length * 20;

    // Search in page content for more comprehensive results
    const pageContent = searchableContent.find(content => content.route === chapter.route);
    if (pageContent) {
      pageContent.sections.forEach(section => {
        const sectionText = `${section.title} ${section.content}`.toLowerCase();
        if (sectionText.includes(lowerQuery)) {
          score += 30;
          
          // Extract snippet with context around the match
          if (!snippet) {
            const matchIndex = section.content.toLowerCase().indexOf(lowerQuery);
            if (matchIndex !== -1) {
              const start = Math.max(0, matchIndex - 50);
              const end = Math.min(section.content.length, matchIndex + lowerQuery.length + 50);
              snippet = (start > 0 ? "..." : "") + 
                        section.content.substring(start, end) + 
                        (end < section.content.length ? "..." : "");
              matchedSection = section.title;
            }
          }
        }
      });
    }

    // Use description as fallback snippet
    if (!snippet) {
      snippet = chapter.description;
    }

    return {
      ...chapter,
      score,
      snippet,
      matchedSection
    };
  };

  useEffect(() => {
    console.log("SearchBar - searchQuery:", searchQuery);
    
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsOpen(false);
      return;
    }

    // Calculate relevance for all chapters
    const results = chapters
      .map(chapter => calculateRelevance(chapter, searchQuery))
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score); // Sort by relevance score
    
    console.log("SearchBar - search results with scores:", results);
    setSearchResults(results);
    setIsOpen(results.length > 0);
  }, [searchQuery, chapters]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const clearSearch = () => {
    setSearchQuery("");
    setIsOpen(false);
  };

  const handleChapterClick = (result: SearchResult) => {
    console.log("SearchBar - clicking chapter:", result);
    console.log("SearchBar - navigating to route:", result.route);
    
    setSearchQuery("");
    setIsOpen(false);
  };

  // Highlight matching text in snippet
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) => 
      part.toLowerCase() === query.toLowerCase() 
        ? <mark key={index} className="bg-primary/30 text-foreground font-medium">{part}</mark>
        : part
    );
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-10 bg-background border-border focus:border-primary"
        />
        {searchQuery && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-muted rounded-sm p-1"
          >
            <X className="h-3 w-3 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Dropdown Results */}
      {isOpen && searchResults.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border border-border bg-card shadow-lg max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-muted-foreground px-3 py-2 font-medium">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
            </div>
            {searchResults.map((result) => (
              <Link
                key={result.id}
                to={result.route}
                onClick={() => handleChapterClick(result)}
                className="block"
              >
                <div className="p-3 hover:bg-muted rounded-lg transition-colors cursor-pointer border-b border-border/50 last:border-b-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm text-foreground line-clamp-1">
                        {result.title}
                      </h4>
                      {result.matchedSection && (
                        <p className="text-xs text-primary/80 mt-0.5">
                          Found in: {result.matchedSection}
                        </p>
                      )}
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {highlightText(result.snippet || result.description, searchQuery)}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">
                        {result.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Card>
      )}

      {/* No Results */}
      {isOpen && searchQuery && searchResults.length === 0 && (
        <Card className="absolute top-full left-0 right-0 mt-2 z-50 border border-border bg-card shadow-lg">
          <div className="p-4 text-center">
            <p className="text-sm text-muted-foreground">
              No results found for "{searchQuery}"
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Try different keywords or browse all benefits
            </p>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;