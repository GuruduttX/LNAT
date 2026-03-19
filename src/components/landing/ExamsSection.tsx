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
    <section id="exams" className="py-14 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Universities */}
          <div>
            <h2 className="font-heading text-gray-900 mb-6" style={{ fontWeight: 900 }}>
              Top Law Universities We Prepare You For
            </h2>
            <div className="space-y-3">
              {universities.map((university, i) => (
                <motion.div
                  key={university.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white border border-gray-100 shadow-sm p-4 flex gap-4 items-start"
                >
                  {/* Logo */}
                  <div className={`w-16 h-16 shrink-0 border border-gray-100 flex items-center justify-center p-1.5 overflow-hidden ${university.darkBg ? "bg-gray-900" : "bg-white"}`}>
                    {university.logo ? (
                      <img
                        src={university.logo}
                        alt={`${university.shortName} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const img = e.currentTarget as HTMLImageElement;
                          img.style.display = "none";
                          const parent = img.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span style="font-family:Inter,sans-serif;font-weight:900;font-size:0.75rem;color:#b91c1c;text-align:center;line-height:1.2">${university.shortName}</span>`;
                          }
                        }}
                      />
                    ) : (
                      <span className="font-heading text-primary font-black text-sm">
                        {university.shortName}
                      </span>
                    )}
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-bold text-sm text-gray-900 leading-snug">
                      {university.name}
                    </p>
                    <p className="font-body text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 shrink-0" />
                      {university.location}
                    </p>
                    <p className="font-body text-xs text-gray-500 mt-1.5 leading-relaxed">
                      {university.info}
                    </p>
                    <span className="inline-block mt-2 bg-primary/10 text-primary text-[11px] font-semibold font-body px-2 py-0.5">
                      Exam: {university.exam}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Exams */}
          <div>
            <h2 className="font-heading text-gray-900 mb-6" style={{ fontWeight: 900 }}>
              Entrance Exams Covered
            </h2>
            <div className="flex flex-wrap gap-2">
              {exams.map((e, i) => (
                <motion.span
                  key={e}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="inline-flex items-center gap-1.5 bg-primary text-white text-xs md:text-sm font-body font-semibold px-4 py-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  {e}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 p-5 bg-white border border-gray-100 shadow-sm">
              <p className="font-body text-gray-600 text-sm mb-3 font-medium">
                Not sure which university to target?
              </p>
              <Button
                asChild
                className="bg-primary text-white hover:bg-primary/90 rounded-none font-bold text-sm shadow-none"
              >
                <a href="tel:+918750581505">Talk to Our Expert →</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamsSection;
