import { motion } from "framer-motion";
import { FileText, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const universities = [
  {
    name: "University of Oxford",
    shortName: "Oxford",
    location: "Oxford, UK",
    exam: "LNAT",
    info: "One of the world's most prestigious law schools. Highly competitive entrance.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Arms_of_University_of_Oxford.svg/330px-Arms_of_University_of_Oxford.svg.png",
    darkBg: false,
  },
  {
    name: "University of Cambridge",
    shortName: "Cambridge",
    location: "Cambridge, UK",
    exam: "LNAT",
    info: "World-renowned for legal education and academic rigour.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/200px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png",
    darkBg: false,
  },
  {
    name: "University College London (UCL)",
    shortName: "UCL",
    location: "London, UK",
    exam: "LNAT",
    info: "Top-ranked faculty of laws with outstanding global reputation.",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c2/UCL_Logo%2C_plain_background.svg/500px-UCL_Logo%2C_plain_background.svg.png",
    darkBg: false,
  },
  {
    name: "London School of Economics (LSE)",
    shortName: "LSE",
    location: "London, UK",
    exam: "LNAT",
    info: "Leading institution for law, known for public and international law.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/London_School_of_Economics_Coat_of_Arms.svg/500px-London_School_of_Economics_Coat_of_Arms.svg.png",
    darkBg: false,
  },
  {
    name: "King's College London",
    shortName: "KCL",
    location: "London, UK",
    exam: "LNAT",
    info: "Highly respected law school with strong industry connections.",
    logo: "https://www.iied.org/sites/default/files/styles/page/public/logos/2023-09/kcl-logo_0.png.webp",
    darkBg: false,
  },
  {
    name: "University of Bristol",
    shortName: "Bristol",
    location: "Bristol, UK",
    exam: "LNAT",
    info: "Renowned for its socio-legal research and academic excellence.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Shield_of_the_University_of_Bristol.svg/330px-Shield_of_the_University_of_Bristol.svg.png",
    darkBg: false,
  },
  {
    name: "University of Durham",
    shortName: "Durham",
    location: "Durham, UK",
    exam: "LNAT",
    info: "Prestigious law school with strong Oxbridge-style teaching.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/University_of_Durham_arms.svg/500px-University_of_Durham_arms.svg.png",
    darkBg: false,
  },
  {
    name: "University of Glasgow",
    shortName: "Glasgow",
    location: "Glasgow, UK",
    exam: "LNAT",
    info: "Scotland's leading law school with international outlook.",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/81/UofG_Coat_of_Arms.png",
    darkBg: false,
  },
  {
    name: "University of Nottingham",
    shortName: "Nottingham",
    location: "Nottingham, UK",
    exam: "LNAT",
    info: "Top UK law school known for human rights and international law.",
    logo: "https://www.nottingham.ac.uk/etc.clientlibs/uon/clientlibs/clientlib-site/resources/images/Logo-white.svg",
    darkBg: true,
  },
  {
    name: "SUSS – Singapore University of Social Sciences",
    shortName: "SUSS",
    location: "Singapore",
    exam: "LNAT",
    info: "Singapore's premier law school accepting LNAT scores for law admissions.",
    logo: "https://www.suss.edu.sg/assets/images/logo.png",
    darkBg: false,
  },
  {
    name: "IE University",
    shortName: "IE",
    location: "Madrid, Spain",
    exam: "LNAT",
    info: "Top-ranked European university with a globally recognised law programme.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/IE_University_logo.svg/330px-IE_University_logo.svg.png",
    darkBg: false,
  },
  {
    name: "OP Jindal Global University",
    shortName: "JGU",
    location: "Sonipat, India",
    exam: "LNAT",
    info: "Important Update: Now accepts LNAT scores! India's top private law university.",
    logo: "https://jgu.edu.in/front/assets/img/logo-white.webp",
    darkBg: true,
  },
];

const exams = [
  "LNAT (Law National Aptitude Test)",
  "University of Oxford – Law",
  "University of Cambridge – Law",
  "UCL Faculty of Laws",
  "LSE Law",
  "King's College London – Law",
  "Durham Law School",
  "OP Jindal Global University (LNAT accepted)",
];

const ExamsSection = () => {
  return (
    <section id="exams" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-1.5 font-body mb-4"
          >
            GLOBAL OPPORTUNITIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-gray-900 text-3xl md:text-4xl lg:text-[40px] max-w-4xl mx-auto" 
            style={{ fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.15 }}
          >
            Top Law Universities We Prepare You For
          </motion.h2>
        </div>

        {/* Universities Grid (4 cols on laptops, perfectly balanced) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 mb-16">
          {universities.map((university, i) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-4 md:p-5 flex flex-col h-full"
            >
              <div className="flex gap-3.5 items-start mb-3.5">
                {/* Logo */}
                <div className={`w-12 h-12 shrink-0 border border-gray-100 flex items-center justify-center p-1.5 ${university.darkBg ? "bg-gray-900" : "bg-white"}`}>
                  {university.logo ? (
                    <img
                      src={university.logo}
                      alt={`${university.shortName} logo`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-heading text-primary font-black text-xs">{university.shortName}</span>
                  )}
                </div>
                {/* Titles */}
                <div className="flex-1 min-w-0 pt-0.5">
                  <p className="font-body font-bold text-[13px] text-gray-900 leading-snug line-clamp-2">
                    {university.name}
                  </p>
                  <p className="font-body text-[10px] text-gray-500 flex items-center gap-[3px] mt-1 uppercase tracking-wide font-bold">
                    <MapPin className="w-[10px] h-[10px] shrink-0" />
                    {university.location}
                  </p>
                </div>
              </div>
              
              {/* Info text - takes remaining space to push badge down to bottom */}
              <p className="font-body text-[11px] md:text-xs text-gray-600 leading-relaxed mb-4 flex-grow">
                {university.info}
              </p>
              
              {/* Badge at the bottom */}
              <div className="mt-auto">
                <span className="inline-block bg-primary/5 text-primary text-[10px] font-bold font-body px-2 py-1 uppercase tracking-wider">
                  Exam: {university.exam}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner: Exams Covered & CTA combined */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-200 shadow-lg p-6 md:p-10"
        >
          <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-center">
            
            {/* Left: Exams list */}
            <div>
              <h3 className="font-heading text-2xl text-gray-900 mb-4" style={{ fontWeight: 900, letterSpacing: "-0.01em" }}>
                Entrance Exams Covered
              </h3>
              <p className="font-body text-sm text-gray-600 mb-6 max-w-2xl leading-relaxed">
                While LNAT is our primary focus, our curriculum inherently builds the critical reasoning and reading comprehension skills required for other major law entrances globally.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {exams.map((e, i) => (
                  <span
                    key={e}
                    className="inline-flex items-center gap-1.5 bg-gray-50 border border-gray-200 text-gray-800 text-[13px] font-body font-semibold px-3.5 py-2 hover:border-primary/40 transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5 text-primary" />
                    {e}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: CTA Box */}
            <div className="bg-gray-50 border border-gray-100 p-6 text-center h-full flex flex-col justify-center">
              <h4 className="font-heading text-lg text-gray-900 mb-2" style={{ fontWeight: 800 }}>Need Clarity?</h4>
              <p className="font-body text-xs text-gray-500 mb-5 leading-relaxed">
                Not sure which universities align with your profile and goals? Talk to our admissions expert.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm shadow-none h-11"
              >
                <a href="tel:+918750581505">Talk to Our Expert →</a>
              </Button>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExamsSection;
