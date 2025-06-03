
import { useEffect } from "react";

const WaitlistForm = () => {
  useEffect(() => {
    // Load Paperform script
    const script = document.createElement('script');
    script.src = "https://paperform.co/__embed.min.js";
    document.body.appendChild(script);

    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.querySelector('script[src="https://paperform.co/__embed.min.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div data-paperform-id="6ukfyiof"></div>
    </div>
  );
};

export default WaitlistForm;
