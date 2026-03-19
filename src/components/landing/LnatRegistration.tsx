import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const steps = [
  "Visit the LNAT official website",
  "Create an account and register for the test",
  "Choose your preferred test date and location",
  "Pay the exam fee and confirm your registration",
];

const LnatRegistration = () => {
  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="font-heading text-gray-900 text-center mb-10"
          style={{ fontWeight: 900 }}
        >
          LNAT Registration Process
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="bg-white border border-gray-100 shadow-sm p-5 flex items-start gap-4"
            >
              <div className="w-8 h-8 bg-primary text-white font-heading font-black flex items-center justify-center shrink-0 text-sm">
                {i + 1}
              </div>
              <div className="flex items-start gap-3 flex-1">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <p className="font-body text-sm text-gray-700">{step}</p>
              </div>
            </motion.div>
          ))}

          {/* Deadline note */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-amber-50 border border-amber-200 p-5 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="font-body text-sm text-gray-700 leading-relaxed">
              <span className="font-bold text-gray-900">Important Deadline: </span>
              Registration for LNAT tests for university entry in September/October opens on{" "}
              <span className="font-bold text-primary">1st August</span> of the previous year.
              Testing starts on <span className="font-bold text-primary">1st September</span> every year.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LnatRegistration;
