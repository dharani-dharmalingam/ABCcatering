import { useEffect, useState } from 'react';

interface UseDIDScriptReturn {
  isLoaded: boolean;
  error: string | null;
}

export const useDIDScript = (): UseDIDScriptReturn => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if script is already loaded
    if (document.querySelector('script[src*="agent.d-id.com"]')) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://agent.d-id.com/v2/index.js';
    script.setAttribute('data-mode', 'fabio');
    script.setAttribute('data-client-key', 'Z29vZ2xlLW9hdXRoMnwxMDI0ODA0ODY0NDQzMzI1ODU0ODQ6UmQteWt1N29nc3dBcGFCazU4c1hO');
    script.setAttribute('data-agent-id', 'v2_agt_AlBXptXi');
    script.setAttribute('data-name', 'did-agent');
    script.setAttribute('data-monitor', 'true');
    script.setAttribute('data-orientation', 'horizontal');
    script.setAttribute('data-position', 'right');

    script.onload = () => {
      console.log('D-ID script loaded successfully');
      setIsLoaded(true);
    };

    script.onerror = () => {
      console.error('Failed to load D-ID script');
      setError('Failed to load D-ID script');
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[src*="agent.d-id.com"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return { isLoaded, error };
};