import TopBar from "@/components/landing/TopBar";
import SEO from "@/components/SEO";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CoursesSection from "@/components/landing/CoursesSection";
import ExamsSection from "@/components/landing/ExamsSection";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import StatsSection from "@/components/landing/StatsSection";
import ScholarshipSection from "@/components/landing/ScholarshipSection";
import CentersSection from "@/components/landing/CentersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ParentFeatures from "@/components/landing/ParentFeatures";
import DemoCTA from "@/components/landing/DemoCTA";
import BrochureDownload from "@/components/landing/BrochureDownload";
import Footer from "@/components/landing/Footer";
import MobileBottomBar from "@/components/landing/MobileBottomBar";
import WhatsAppButton from "@/components/landing/WhatsAppButton";
import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import LeadForm from "@/components/landing/LeadForm";

const Index = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Open the popup automatically after 1.5 seconds when user enters the website
    const hasSeenPopup = sessionStorage.getItem("hasSeenEntryPopup");
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasSeenEntryPopup", "true");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="min-h-screen font-body pb-14 lg:pb-0">
      <SEO />
      <header role="banner">
        <TopBar />
        <Navbar />
      </header>
      <main id="main-content" role="main">
        <HeroSection />
        <CoursesSection />
        <ExamsSection />
        <WhyChooseUs />
        <StatsSection />
        <ScholarshipSection />
        <CentersSection />
        <TestimonialsSection />
        <ParentFeatures />
        <DemoCTA />
        <BrochureDownload />
      </main>
      <Footer />
      <MobileBottomBar />
      <WhatsAppButton />

      {/* Auto-open entry popup */}
      <Dialog open={showPopup} onOpenChange={setShowPopup}>
        <DialogContent className="w-[95vw] sm:max-w-md p-0 max-h-[90vh] overflow-y-auto overflow-x-hidden border-none bg-transparent shadow-2xl [&>button]:text-white [&>button]:top-4 [&>button]:right-4">
          <div className="bg-white rounded-xl overflow-hidden flex flex-col">
            <div className="bg-primary px-6 py-4 shrink-0">
              <p className="text-white font-heading font-black text-lg" style={{ letterSpacing: "-0.01em" }}>
                Get Free Demo
              </p>
              <p className="text-white/80 text-xs font-body mt-0.5">Book a free LNAT session</p>
            </div>
            <div className="bg-white px-2 sm:px-6 py-5 flex-1 overflow-y-auto">
              <LeadForm compact />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
