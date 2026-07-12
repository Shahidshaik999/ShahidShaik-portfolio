import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Soft Skills",
    skills: [
      "Communication",
      "Analytical Thinking",
      "Team Collaboration",
      "Problem Solving",
      "Adaptability",
      "Time Management",
    ],
  },
  {
    title: "Core Computer Science",
    skills: ["DSA", "OOPs", "DBMS", "CN", "OS", "System Design", "Problem Solving"],
  },
  {
    title: "Frontend",
    skills: [
      "Html",
      "Css",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Vue.js",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "FastAPI", "Django", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["Mysql", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS(Basic)", "Docker(Basic)", "Kubernetes(Basic)", "CI/CD", "GitHub Actions"],
  },
  {
    title: "Machine Learning / AI",
    skills: ["TensorFlow(basic)", "Transformers(basic)", "RAG", "scikit-learn", "NLP", "LLMs"],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "SQL"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative">
      <div className="blob w-80 h-80 bg-secondary/10 -top-20 right-0" />

      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title text-white">
            Technical <span className="text-gradient">Skills</span>
          </h2>

          <p className="section-subtitle">
            Technologies and tools I work with daily.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              {/* ✅ CHANGED HERE */}
              <h3 className="font-heading font-semibold text-lg mb-4 text-white">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
