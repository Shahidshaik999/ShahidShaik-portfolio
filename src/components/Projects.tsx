import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Info } from "lucide-react";

const filters = ["All", "Web", "ML", "Mobile", "DevOps"];

const projects = [
  {
    title: "SnapCart – Full-Stack Grocery Delivery Platform",
    category: "Web Application",
    stack: ["Next.js","React", "TypeScript", "Socket.Io", "GeminiAI", "MongoDB", "Cloudinary"],
    description:
      "Built a full-stack grocery delivery system with role-based access control (User, Admin, Delivery Partner) and secure authentication.Implemented end-to-end flows for product browsing, order placement, and real-time delivery tracking using Socket.IO dashboards. Developed admin modules for product and order management including Cloudinary-based image uploads and delivery partner orderupdates.",
    github: "https://github.com/Shahidshaik999/SnapCart_FullStack_by_shahid",
    demo: "https://example.com",
  },
  {
    title: "SkillsPark AI – Smart Resume Analyzer",
    category: "Machine Learning",
    stack: ["Python", "React", "TypeScript", "Tailwind", "FastAPI","vercel", "Transformers"],
    description:
      "AI-powered resume analyzer that extracts your skills, infers best-fit tech roles, and generates interview preparation. all from a single resume upload.Implemented resume validation, drag-and-drop uploads, and deployed the system using Vercel (frontend) and Render (backend)",
    github: "https://github.com/Shahidshaik999/skillspark-ai-by-shahid",
    demo: "https://skillspark-ai-by-shahid.vercel.app/",
  },
  {
    title: "TypePolish – AI Grammar, Tone & Fluency Enhancer",
    category: "Web Application",
    stack: ["React","TypeScript", "Tailwind CSS","Python", "FastAPI", "HuggingFace Transformer Model for Smart Rewrite", "Uvicorn Server"],
    description:
      "Developed an AI-driven writing assistant that corrects grammar, enhances fluency, and adjusts tone in real time using React, FastAPI, and HuggingFace transformers. Features include tone control, smart rewriting, and a modern responsive UI.",
    github: "https://github.com/Shahidshaik999/Grammar-Correction-AI-by-shahid",
    demo: "https://example.com",
  },
  {
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib","SVC", "Random Forest", "KNN"],
    description:
      "Built a telecom customer churn prediction system using SVC, Random Forest, and KNN with cross-validation and ROC-AUC evaluation. Implemented full ML pipeline including preprocessing, scaling, and feature importance analysis.",
    github: "https://github.com/Shahidshaik999/churnprediction",
    demo: "https://example.com",
  },
  {
    title: "Heart Disease Prediction ML System",
    category: "Machine Learning",
    stack: ["React","TypeScript", "Tailwind CSS","Python", "FastAPI", "Supabase", "Logistic Regression", "KNN, SVM, Decision Tree, Random ForestUvicorn Server"],
    description:
      "Developed a full-stack ML web app for real-time heart disease risk prediction using FastAPI and React. Trained multiple models and deployed the best-performing Random Forest with a metrics dashboard and Supabase-backed patient history.",
    github: "https://github.com/Shahidshaik999/Heart-Disease-Prediction-ML-System-by-shahid",
    demo: "https://example.com",
  },
  {
    title: "Cafe Billing System",
    category: "Python Application",
    stack: ["Python", "Tkinter"],
    description:
      "Built a Python Tkinter-based cafe billing application that calculates multi-item orders, applies tax and service charges, and generates unique order IDs through an interactive GUI.",
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative">
      <div className="blob w-96 h-96 bg-primary/15 top-1/3 -right-48" />
      <div className="blob w-72 h-72 bg-secondary/10 bottom-20 left-0" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle">A curated selection of my most impactful work.</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, rotateY: 2, rotateX: 2 }}
              className="glass-card-hover p-6 flex flex-col group"
              style={{ perspective: 1000 }}
            >
              {/* Category badge */}
              <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full self-start mb-4">
                {project.category}
              </span>

              <h3 className="font-heading font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-md bg-muted text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs px-3 py-1.5">
                  <Github size={14} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs px-3 py-1.5">
                  <ExternalLink size={14} /> Live Demo
                </a>
                <button className="btn-ghost text-xs px-3 py-1.5">
                  <Info size={14} /> Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
