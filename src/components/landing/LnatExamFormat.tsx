import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";

const sections = [
  { name: "Section 1: Multiple Choice Questions", duration: "95 minutes" },
  { name: "Section 2: Essay", duration: "40 minutes" },
];

const evaluates = [
  "Logical reasoning and critical analysis",
  "Argumentative and essay-writing skills",
];

const LnatExamFormat = () => {
  return (
    <section className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="font-heading text-gray-900 text-center mb-10"
          style={{ fontWeight: 900 }}
        >
          LNAT Exam Format
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* What it evaluates */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 shadow-sm p-6"
          >
            <h3
              className="font-heading text-gray-900 mb-4"
              style={{ fontWeight: 900, fontSize: "1rem" }}
            >
              What it Evaluates
            </h3>
            <div className="space-y-3">
              {evaluates.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Exam structure */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 }}
            className="bg-white border border-gray-100 shadow-sm p-6"
          >
            <h3
              className="font-heading text-gray-900 mb-4"
              style={{ fontWeight: 900, fontSize: "1rem" }}
            >
              Exam Structure
            </h3>
            <div className="space-y-3">
              {sections.map((s) => (
                <div
                  key={s.name}
                  className="flex items-center justify-between border border-gray-100 p-3"
                >
                  <p className="font-body text-sm text-gray-700 font-semibold">{s.name}</p>
                  <span className="flex items-center gap-1.5 text-xs text-primary font-body font-bold bg-primary/10 px-2.5 py-1 shrink-0 ml-3">
                    <Clock className="w-3 h-3" />
                    {s.duration}
                  </span>
                </div>
              ))}
              <div className="bg-primary/5 border border-primary/20 p-3 flex items-center justify-between">
                <p className="font-body text-sm text-gray-900 font-bold">Total Duration</p>
                <span className="font-body text-sm text-primary font-black">2 hrs 15 mins</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LnatExamFormat;
