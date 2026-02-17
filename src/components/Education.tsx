import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science & Engineering(AIML)",
    institution: "Kalasalingam Academy of Research and Education, Krishnankoil",
    year: "2022 – 2026",
    coursework: "Data Structures, Algorithms, Machine Learning, DBMS, Computer Networks, OS",
    description: "Focused on AI/ML and full-stack development with a strong foundation in CS fundamentals with CGPA: 8.0/10",
  },
  {
    degree: "12th Grade (Senior Secondary)",
    institution: "NRI Junior College, Ongole",
    year: "2020 – 2022",
    coursework: "Physics, Chemistry, Mathematics",
    description: "Scored 74.4% with distinction in Science and Mathematics.",
  },
  {
    degree: "10th Grade (Secondary)",
    institution: "Sri Krishna Sai School, Ongole",
    year: "2020",
    coursework: "Science, Mathematics, English, Social Studies",
    description: "Achieved 98.8% aggregate with school topper in Mathematics and Science.",
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative">
      <div className="blob w-80 h-80 bg-accent/10 bottom-0 right-10" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="section-subtitle">My academic journey and qualifications.</p>
        </motion.div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
                  <GraduationCap size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="font-heading font-semibold text-lg">{edu.degree}</h3>
                    <span className="text-sm text-primary font-medium">{edu.year}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="text-foreground/80 font-medium">Coursework:</span> {edu.coursework}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
