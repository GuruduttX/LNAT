import { useEffect } from "react";

interface LeadFormProps {
  onSuccess?: () => void;
  className?: string;
  title?: string;
  compact?: boolean;
}

const LeadForm = ({ className = "", compact = false }: LeadFormProps) => {
  useEffect(() => {
    // Dynamically inject the NoPaperForms script on component mount with a 
    // cache-buster query parameter so that it ALWAYS re-executes its internal
    // initialization logic (cIframe) in Single Page Applications like this one.
    // Without this, production builds on Vercel may cache the script execution.
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = `https://widgets.in6.nopaperforms.com/emwgts.js?v=${Date.now()}`;
    document.body.appendChild(script);

    return () => {
      // Clean up the script tag on unmount to prevent head clutter
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={`${compact ? "" : "bg-white p-6 border border-gray-100 shadow-sm"} ${className}`} id="hero-form">
      <div 
        className="npf_wgts w-full min-h-[650px]" 
        data-height="650px" 
        data-w="2813f4ab5a613222cb968f1cee3b6603"
      ></div>
    </div>
  );
};

export default LeadForm;
