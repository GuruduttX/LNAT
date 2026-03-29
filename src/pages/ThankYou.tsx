import { useEffect } from "react";
import { CheckCircle, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Redirect after 5 seconds
    const timer = setTimeout(() => {
      window.location.href = "https://lawpreptutorialdelhi.com/";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen font-body flex flex-col items-center justify-center bg-gray-50 p-4">
      <SEO
        title="Thank You | LawPrep Tutorial"
        description="Thank you for your interest. We will be in touch shortly."
      />

      <main className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 sm:p-10 text-center border border-gray-100">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center shadow-inner">
            <CheckCircle className="w-10 h-10 text-green-600" strokeWidth={2.5} />
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Thank You!
        </h1>

        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Your enquiry has been successfully submitted. Our team will contact you
          shortly to assist you further.
        </p>

        <div className="bg-blue-50 text-blue-800 rounded-lg p-4 mb-8 text-sm font-medium">
          You will be automatically redirected to our homepage in a few
          seconds...
        </div>

        <a
          href="https://lawpreptutorialdelhi.com/"
          className="inline-flex items-center justify-center gap-2 w-full bg-red-600 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-red-700 transition-colors shadow-md hover:shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          Return to Homepage Now
        </a>
      </main>
    </div>
  );
};

export default ThankYou;
