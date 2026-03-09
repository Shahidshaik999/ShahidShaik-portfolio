import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Springer Capital Pvt Ltd",
    role: "Software Engineering Intern",
    start: "Nov 2025",
    end: "Jan 2026",
    months: 4,
    bullets: [
      "Completed structured DevOps training covering CI/CD pipelines, Git workflows, and automation fundamentals",
      "Worked with Docker containers, Linux shell commands, and GitHub version control through guided exercises",
      "Understood deployment lifecycle, environment configuration, and troubleshooting practices",
      "Collaborated with cross-functional teams on scalable cloud infrastructure",
    ],
  },
  {
    company: "cloud counselage India Pvt Ltd",
    role: "Machine Learning Intern",
    start: "June 2024",
    end: "sep 2024",
    months: 4,
    bullets: [
      "Developed a Placement Prediction Model using supervised learning, preprocessing pipelines, and evaluation metrics",
      "Applied data analytics and visualization techniques on structured datasets to extract insights",
      "Collaborated in agile workflows improving documentation and delivery efficiency",
      "Presented findings to leadership, leading to production deployment",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative">
      <div className="blob w-72 h-72 bg-primary/10 top-1/2 -left-36" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">Professional experience at leading tech companies.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-6 ring-4 ring-background z-10" />

              {/* Spacer */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-1/2">
                <div className="glass-card-hover p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg">{exp.company}</h3>
                      <p className="text-primary text-sm">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {exp.start} – {exp.end} · {exp.months} months
                  </p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-2">
                        <span className="text-secondary mt-1.5 flex-shrink-0">▹</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
