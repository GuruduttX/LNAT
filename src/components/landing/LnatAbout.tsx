import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const LnatAbout = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-start gap-6"
          >
            <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2
                className="font-heading text-gray-900 mb-3"
                style={{ fontWeight: 900 }}
              >
                What is LNAT?
              </h2>
              <p className="font-body text-gray-600 text-sm md:text-[15px] leading-relaxed">
                The Law National Aptitude Test (LNAT) is a standardized exam assessing critical thinking,
                logical reasoning, and argumentative skills essential for excelling in law school. It is
                required by top UK universities including Oxford, Cambridge, UCL, LSE, and more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LnatAbout;
