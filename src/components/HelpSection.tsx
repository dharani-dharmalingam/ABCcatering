import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle } from "lucide-react";

const HelpSection = () => {
  const handleChatClick = () => {
    const didAgent = document.querySelector('did-agent') as any;
    if (didAgent && typeof didAgent.open === 'function') {
      didAgent.open();
      return;
    }
    const selectors = [
      'button[data-testid="did-fab"]',
      '[data-name="did-agent-fab"]',
      '[data-name="did-agent"]',
      'button[aria-label*="agent" i]',
      'button[aria-label*="chat" i]'
    ];
    for (const sel of selectors) {
      const el = document.querySelector(sel) as HTMLElement | null;
      if (el) { el.click(); return; }
    }
  };

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <Card className="bg-card border border-border p-8 lg:p-12 rounded-3xl shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Need help?
              </h2>
              <p className="text-lg text-muted-foreground">
                Have questions about your benefits or the enrollment process? We're here 
                to assist you every step of the way.
              </p>
              <Button variant="outline" size="lg" onClick={handleChatClick}>
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat with AI Agent
              </Button>
            </div>

            <div className="flex-shrink-0 text-8xl">
              💬
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HelpSection;