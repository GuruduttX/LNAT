import { useEffect } from "react";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import TopBar from "@/components/landing/TopBar";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen font-body flex flex-col">
      <SEO
        title="Thank You | LawPrep Tutorial"
        description="Thank you for your interest in LawPrep Tutorial. Our team will contact you shortly."
      />
      <header role="banner">
        <TopBar />
        <Navbar />
      </header>

      <main
        id="main-content"
        role="main"
        className="flex-1 flex items-center justify-center py-16 px-4"
        style={{
          background:
            "linear-gradient(135deg, #f0f4ff 0%, #e8f0fe 50%, #f5f0ff 100%)",
        }}
      >
        <div className="max-w-lg w-full text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
                boxShadow: "0 8px 32px rgba(34, 197, 94, 0.35)",
              }}
            >
              <CheckCircle className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
          </div>

          {/* Thank You Message */}
          <h1
            className="font-heading font-black text-3xl sm:text-4xl text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Thank You!
          </h1>
          <p className="text-gray-600 text-base sm:text-lg mb-2">
            Your enquiry has been submitted successfully.
          </p>
          <p className="text-gray-500 text-sm sm:text-base mb-8">
            Our academic counsellor will get in touch with you shortly to help
            you with the best LNAT preparation plan.
          </p>

          {/* Contact Info */}
          <div
            className="bg-white rounded-xl p-5 mb-8 inline-block shadow-md"
            style={{ border: "1px solid #e5e7eb" }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider font-semibold mb-2">
              Need immediate assistance?
            </p>
            <a
              href="tel:+918800550061"
              className="inline-flex items-center gap-2 text-primary font-heading font-bold text-lg hover:underline"
            >
              <Phone className="w-5 h-5" />
              +91 88005 50061
            </a>
          </div>

          {/* Back to Home */}
          <div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-white font-heading font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
