import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Law Prep Tutorial's LNAT mock tests were incredibly realistic. The essay feedback from mentors helped me structure my arguments like a professional — I got into UCL Faculty of Laws!",
    name: "Aanya Mehta",
    rank: "Admitted to UCL Faculty of Laws, London",
    initial: "A",
  },
  {
    quote: "The critical thinking sessions at Law Prep were unlike anything I had experienced before. They broke down complex passages so simply. I cracked the LNAT and secured my seat at Durham Law School.",
    name: "Rohan Kapoor",
    rank: "Admitted to Durham Law School, UK",
    initial: "R",
  },
  {
    quote: "From application guidance to personal statement reviews, Law Prep Tutorial supported me through every step. I'm now at King's College London — couldn't have done it without them.",
    name: "Priya Singh",
    rank: "Admitted to King's College London",
    initial: "P",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);

  return (
    <section id="testimonials" className="py-14 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-heading text-gray-900" style={{ fontWeight: 900 }}>
            Student Testimonials
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 border border-gray-200 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.25 }}
              className="bg-white border border-gray-100 shadow-sm p-8 flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Avatar */}
              <div
                className="w-16 h-16 bg-primary/10 border-2 border-primary/20 flex items-center justify-center shrink-0"
              >
                <span
                  className="font-heading text-primary"
                  style={{ fontWeight: 900, fontSize: "1.5rem" }}
                >
                  {testimonials[current].initial}
                </span>
              </div>
              {/* Text */}
              <div className="flex-1">
                <Quote className="w-6 h-6 text-primary mb-3" />
                <p className="font-body text-gray-700 text-[15px] leading-relaxed italic mb-4">
                  "{testimonials[current].quote}"
                </p>
                <p className="font-body font-bold text-gray-900 text-sm">
                  {testimonials[current].name}
                </p>
                <p className="font-body text-xs text-primary font-semibold mt-0.5">
                  ✅ {testimonials[current].rank}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex gap-2 mt-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 transition-all ${
                  i === current ? "bg-primary w-8" : "bg-gray-200 w-4"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
