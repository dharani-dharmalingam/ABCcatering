import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const AIHelpSection = () => {
  const handleChatClick = () => {
    const tryOpen = () => {
      const didAgent = document.querySelector('did-agent') as any;
      if (didAgent && typeof didAgent.open === 'function') {
        didAgent.open();
        return true;
      }
      // Try common selectors the SDK may use for the floating button
      const selectors = [
        'button[data-testid="did-fab"]',
        '[data-name="did-agent-fab"]',
        '[data-name="did-agent"]',
        'button[aria-label*="agent" i]',
        'button[aria-label*="chat" i]'
      ];
      for (const sel of selectors) {
        const el = document.querySelector(sel) as HTMLElement | null;
        if (el) {
          el.click();
          return true;
        }
      }
      return false;
    };

    // Try immediately, then retry briefly while the widget initializes
    if (tryOpen()) return;

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (tryOpen() || attempts >= 10) {
        clearInterval(interval);
      }
    }, 300);
  };

  return (
    <section className="py-16 px-6 bg-background print:hidden">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden bg-abc-blue shadow-lg">
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12">
            <div className="flex-1 space-y-4">
              <h2 className="text-4xl font-bold text-white">
                Need help?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Have questions about your benefits or the enrollment process? We're here to assist you every step of the way.
              </p>
              <Button 
                variant="outline"
                onClick={handleChatClick}
                size="lg" 
                className="bg-white text-abc-blue border-abc-blue hover:bg-abc-blue hover:text-white gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with AI Agent
              </Button>
            </div>

            {/* Chat Emoji */}
            <div className="flex-shrink-0 text-8xl">
              💬
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIHelpSection;
