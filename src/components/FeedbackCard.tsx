import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FeedbackCard = () => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Rating is required to submit feedback.",
        variant: "destructive",
      });
      return;
    }
    
    // Handle feedback submission here
    toast({
      title: "Thank you for your feedback!",
      description: "Your feedback has been submitted successfully.",
    });
    
    // Reset form
    setRating(0);
    setFeedback("");
  };

  return (
    <Card className="p-6 border-2 border-brand-blue/30 bg-gradient-card shadow-lg h-full">
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h3 className="text-xl font-bold text-foreground">Share Your Feedback</h3>
          <p className="text-sm text-muted-foreground">
            Help us improve your experience
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-foreground">
              Rate your experience *
            </label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-colors"
                >
                  <Star
                    className={`h-6 w-6 ${
                      star <= (hoveredRating || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Feedback Text */}
          <div className="space-y-2">
            <label className="text-xs font-medium text-foreground">
              Comments (optional)
            </label>
            <Textarea
              placeholder="Share your thoughts..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows={3}
              className="resize-none text-sm"
            />
          </div>

          <Button type="submit" className="w-full" size="sm">
            Submit Feedback
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default FeedbackCard;