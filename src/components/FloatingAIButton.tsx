import { useDIDScript } from "@/hooks/useDIDScript";

const FloatingAIButton = () => {
  const { isLoaded, error } = useDIDScript();

  const handleClick = () => {
    const tryOpen = () => {
      const didAgent = document.querySelector('did-agent') as any;
      if (didAgent && typeof didAgent.open === 'function') {
        didAgent.open();
        return true;
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
        if (el) {
          el.click();
          return true;
        }
      }
      return false;
    };

    if (tryOpen()) return;

    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      if (tryOpen() || attempts >= 10) {
        clearInterval(interval);
      }
    }, 300);
  };

  // If D-ID loaded successfully, let it render its own avatar
  if (isLoaded && !error) {
    return null;
  }

  // Show fallback "Click here to Chat" bubble when there are issues
  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer border-0 font-medium animate-pulse-glow print:hidden"
      aria-label="Open AI Assistant"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
      Click here to Chat
    </button>
  );
};

export default FloatingAIButton;