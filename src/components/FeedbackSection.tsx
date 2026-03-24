import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Star, Phone } from "lucide-react";

const FeedbackSection = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleStarClick = (starIndex: number) => {
    setRating(starIndex + 1);
  };

  const handleFeedbackSubmit = () => {
    console.log("Feedback submitted:", { rating, feedback });
    // Reset form
    setRating(0);
    setFeedback("");
  };

  const handleContactSubmit = () => {
    console.log("Contact info submitted:", { phone, email });
    // Reset form
    setPhone("");
    setEmail("");
  };

  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feedback Card */}
          <Card className="p-8 border border-border">
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">Your Feedback Matters</h3>
                <p className="text-muted-foreground">Your insights help shape this experience</p>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-8 w-8 cursor-pointer transition-colors ${
                      index < rating 
                        ? "fill-yellow-400 text-yellow-400" 
                        : "text-gray-300 hover:text-yellow-400"
                    }`}
                    onClick={() => handleStarClick(index)}
                  />
                ))}
              </div>

              {/* Feedback Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="feedback" className="text-sm font-medium">
                    What did you think?
                  </Label>
                  <Textarea
                    id="feedback"
                    placeholder="Enter your feedback"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="mt-1 min-h-[100px]"
                  />
                </div>
                <Button 
                  onClick={handleFeedbackSubmit}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Submit
                </Button>
              </div>
            </div>
          </Card>

          {/* Stay Updated Card */}
          <Card className="p-8 border border-border">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">Stay Updated</h3>
                <p className="text-muted-foreground">
                  Want to receive texts or emails directly with your benefits information?
                </p>
              </div>

              <div className="flex items-center space-x-2 text-primary">
                <Phone className="h-5 w-5" />
                <span className="font-medium">Contact Us</span>
              </div>

              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <Button 
                  onClick={handleContactSubmit}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Message Me
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;