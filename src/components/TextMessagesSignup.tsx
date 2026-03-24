import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { MessageSquare, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TextMessagesSignup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    consent: false,
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.consent) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields are required to sign up for text messages.",
        variant: "destructive",
      });
      return;
    }

    // Phone number validation (basic)
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive",
      });
      return;
    }

    // Handle signup submission here
    toast({
      title: "Successfully signed up!",
      description: "You'll receive important benefits updates via text message.",
    });
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      consent: false,
    });
  };

  return (
    <Card className="p-6 border-2 border-brand-blue/30 bg-gradient-card shadow-lg h-full">
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <div className="flex justify-center mb-2">
            <div className="bg-primary/10 p-2 rounded-full">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-foreground">Sign Up for Text Messages</h3>
          <p className="text-sm text-muted-foreground">
            Get important updates sent to your phone
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground">
                First Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                required
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-foreground">
                Last Name *
              </label>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="space-y-1">
            <label className="text-xs font-medium text-foreground">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                value={formData.phoneNumber}
                onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                className="pl-10"
                required
              />
            </div>
          </div>

          {/* Consent Checkbox */}
          <div className="flex items-start space-x-2">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => handleInputChange("consent", checked)}
              className="mt-1"
            />
            <label
              htmlFor="consent"
              className="text-xs text-muted-foreground leading-relaxed cursor-pointer"
            >
              I consent to receive text messages regarding benefits. 
              Message rates may apply. Reply STOP to opt out. *
            </label>
          </div>

          <Button type="submit" className="w-full" size="sm">
            Sign Up for Text Messages
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default TextMessagesSignup;