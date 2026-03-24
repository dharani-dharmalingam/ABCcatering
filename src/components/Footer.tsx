import { Home, FileText, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="text-white py-12 px-6 relative overflow-hidden print:hidden" style={{ backgroundColor: 'hsl(213 45% 20%)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-abc-secondary/30 rounded-full -translate-x-32 -translate-y-32" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-abc-tint-1/40 rounded-full translate-x-64 translate-y-32" />
        <div className="absolute top-1/2 right-20 w-80 h-80 bg-abc-secondary/20 rounded-full translate-x-40 -translate-y-40" />
        <div className="absolute bottom-10 right-40 w-48 h-48 bg-abc-tint-1/30 rounded-full translate-x-24 translate-y-12" />
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefits Guide Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">ABC Catering Benefits Guide

          </h3>
            <p className="text-white/80 leading-relaxed">
              Your comprehensive resource for employee benefits and enrollment information
            </p>
          </div>
          
          {/* Quick Links Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/benefits" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Chapters
                </Link>
              </li>
              <li>
                <Link to="/benefits/document-hub" className="text-white/80 hover:text-white transition-colors flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Document Hub
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <p className="text-white/80 mb-4">
              Have questions? Reach out to our support team
            </p>
            <Button variant="default" size="sm" asChild>
              <a href="mailto:hr@abccatering.com">
                <Mail className="h-4 w-4 mr-2" />
                Contact Us
              </a>
            </Button>
          </div>
          
        </div>
        
        {/* Bottom Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center space-y-2">
          <p className="text-white/80">© 2026 ABC Catering. All rights reserved</p>
          <p className="text-white/60 text-sm">ABC Catering | Employee Benefits</p>
        </div>
      </div>
    </footer>;
};
export default Footer;