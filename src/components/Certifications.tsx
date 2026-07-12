import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    name: "Python Programming ",
    org: "Coursera / Meta",
    skills: "Object Oriented Programming (OOP), Test Driven Development (TDD), Unit Testing, Computer Programming, Cloud Hosting, Python Programming, Software Testing, Data Structures, Django (Web Framework), Development Environment, Programming Principles, Integrated Development Environments",
    link: "https://www.coursera.org/account/accomplishments/verify/T3CEKKRXZ56M",
  },
  {
    name: "Machine Learning with Python(with honors)",
    org: "Coursera / IBM",
    skills: "Supervised Learning, Scikit Learn (Machine Learning Library), Classification Algorithms, Python Programming, Model Evaluation, Unsupervised Learning, Dimensionality Reduction, Applied Machine Learning, Feature Engineering, Predictive Modeling, Decision Tree Learning, Logistic Regression",
    link: "https://www.coursera.org/account/accomplishments/verify/P6Q66BSXY99D",
  },
  {
    name: "Python for Data Science, AI & Development",
    org: "Coursera / IBM",
    skills: "Data Analysis, Web Scraping, Object Oriented Programming (OOP), RESTful API, Jupyter, Data Structures, Python Programming, Pandas (Python Package), Automation, NumPy, File I/O",
    link: "https://www.coursera.org/account/accomplishments/verify/AFM9ZQF824SA",
  },
 {
    name: "Meta Front-End Developer Professional Certificate",
    org: "Coursera/ Meta",
    skills: "React, JavaScript, HTML/CSS, UX Design, Version Control",
    link: "https://www.coursera.org/account/accomplishments/verify/Y56QMZNAMKUA",
  },
    {
    name: "Meta Back-End Developer Professional Certificate",
    org: "Coursera/ Meta",
    skills: "Full-Stack Web Development, Bootstrap (Front-End Framework), Cascading Style Sheets (CSS), Web Applications, JavaScript Frameworks, Web Development, User Interface (UI), Web Design, Hypertext Markup Language (HTML), React.js, Responsive Web Design, HTML and CSS",
    link: "https://www.coursera.org/account/accomplishments/verify/Y56QMZNAMKUA",
  },
    {
    name: "DATABASE MANAGEMENT SYSTEMS",
    org: "CodeChef",
    skills: "Database Design, SQL, Data Modeling, Relational Databases, Database Management Systems",
    link: "https://www.codechef.com/certificates/public/2f720a5",
  },
    {
    name: "Design and Analysis of Algorithms",
    org: "CodeChef",
    skills: "Algorithm Design, Algorithm Analysis, Data Structures, Sorting Algorithms, Graph Algorithms",
    link: "https://www.codechef.com/certificates/public/fe58dc3",
  },
];

const Certifications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="relative">
      <div className="blob w-64 h-64 bg-secondary/10 top-0 left-1/4" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="section-subtitle">Industry-recognized credentials and certifications.</p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6 min-w-[280px] sm:min-w-[320px] snap-center flex flex-col"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 self-start mb-4">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold mb-1">{cert.name}</h3>
              <p className="text-primary text-sm mb-3">{cert.org}</p>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{cert.skills}</p>
              <a href={cert.link} className="btn-ghost text-xs self-start">
                <ExternalLink size={14} /> Verify
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
