import { useEffect, useRef } from "react";

interface LeadFormProps {
  onSuccess?: () => void;
  className?: string;
  title?: string;
  compact?: boolean;
}

const LeadForm = ({ className = "", compact = false }: LeadFormProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Inject the widget div and script dynamically on mount to ensure
    // NoPaperForms initializes correctly even inside dynamic components (like Dialogs)
    containerRef.current.innerHTML = '<div class="npf_wgts" data-height="650px" data-w="2813f4ab5a613222cb968f1cee3b6603"></div>';
    
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className={`${compact ? "" : "bg-white p-6 border border-gray-100 shadow-sm"} ${className}`} id="hero-form">
      <div ref={containerRef} className="w-full min-h-[650px]"></div>
    </div>
  );
};

export default LeadForm;
