import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Turing",
    role: "Software Engineer – Python & Docker",
    start: "September 2026",
    end: "November 2026",
    contract: "Part-time Contract · Remote",
    bullets: [
      "Developed and evaluated Python software engineering tasks for frontier AI model training and benchmarking using containerized environments, automated verification, and agentic coding workflows",
      "Built, debugged, and validated Docker environments with Python, Linux/WSL2, shell scripting, and Git for reproducible AI engineering workflows",
      "Designed benchmark tasks spanning Python services, REST APIs, databases, and filesystem artifacts, validated by test suites and deterministic state-based verifiers",
      "Ran OpenCode and GLM-5.2 coding-agent workflows with MCP/connector-based tool environments; analyzed agent trajectories and investigated task-level failures",
      "Analyzed LLM evaluation results (reward scores, trial consistency, exceptions, verifier coverage, task difficulty) and acted on automated QC findings",
      "Debugged pipelines and task environments via logs, execution traces, verifier outputs, containers, and config files; maintained reproducible builds under version control",
    ],
  },
  {
    company: "Self-Employed",
    role: "Freelance Software Engineer",
    start: "November 2024",
    end: "June 2026",
    contract: "Remote",
    bullets: [
      "Delivered 25+ custom software solutions across AI/ML, full-stack, automation, and IoT domains for academic and independent clients",
      "Designed and developed production-ready applications tailored to client requirements and business objectives",
      "Built intelligent software solutions that automated workflows, improved efficiency, and solved real-world problems",
      "Managed the complete software development lifecycle — from requirements gathering and system design to implementation, testing, deployment, and post-delivery client support",
      "Collaborated with clients to gather requirements and deliver customized software solutions",
    ],
  },
  {
    company: "Springer Capital Pvt Ltd",
    role: "Software Engineering Intern",
    start: "Nov 2025",
    end: "Jan 2026",
    contract: "",
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
    end: "Sep 2024",
    contract: "",
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
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="section-subtitle">Professional experience at leading tech companies.</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.start}
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
                    {exp.start} – {exp.end}{exp.contract ? ` · ${exp.contract}` : ""}
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
