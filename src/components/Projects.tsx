import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Info } from "lucide-react";

const filters = ["All", "Web", "ML", "Mobile", "DevOps"];

const projects = [
  {
    title: "AI Codebase Explainer — Understand Any GitHub Repo Instantly",
    category: "AI Application",
    stack: ["React 18", "Vite", "Tailwind CSS", "FastAPI", "Groq API", "Llama 3.1", "FAISS", "sentence-transformers", "GitPython", "React Flow", "Python AST"],
    description:
      "Paste a GitHub URL and get a full AI-powered breakdown of the codebase in under 90 seconds. Features include plain-English project summary, tech stack detection, AI-ranked important files, interactive file explorer with syntax highlighting, RAG-powered chat (ask anything about the repo), git commit history with AI explanations, AST-extracted execution flow graph, auto-generated system design doc, and a What-If impact analyzer.",
    github: "https://github.com/Shahidshaik999/AI-Codebase-Explainer-Understand-Any-GitHub-Repo-Instantly_by_shahid",
    demo: "",
  },
  {
    title: "VoiceOver Studio — Neural Text-to-Speech Web App",
    category: "Web Application",
    stack: ["Node.js", "Express", "node-edge-tts", "Vanilla JavaScript", "Microsoft Edge Neural TTS", "WebSocket", "Render"],
    description:
      "Turn any script into natural human voice powered by Microsoft Edge Neural TTS over WebSocket. Features 60+ neural voices including Andrew, Ava, and Brian, full Indian language support (Hindi, Telugu, Tamil, Kannada, Malayalam), speed and pitch controls, and instant MP3 download — completely free with no signup or API key required. Deployed on Render with a glassmorphism UI.",
    github: "https://github.com/Shahidshaik999/voiceover-studio",
    demo: "https://voiceover-studio-z68k.onrender.com",
  },
  {
    title: "AI Research Paper Detection — AI vs Human Text Classifier",
    category: "Machine Learning",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "FastAPI", "Hugging Face Transformers", "pdfplumber", "Pydantic"],
    description:
      "Full-stack tool for detecting AI-generated content in research PDFs at paragraph level. Uploads and analyzes PDFs with section classification (Abstract, Introduction, Methodology, etc.), per-section AI percentage scores, and color-coded highlights (red >80%, orange 50–80%, green <50%). Built to support academic integrity checks and help universities validate research submissions.",
    github: "https://github.com/Shahidshaik999/AI-Research-Paper-Detection-by-shahid",
    demo: "",
  },
  {
    title: "Vibe Matcher — AI-Driven Vibe-to-Product Recommender",
    category: "Machine Learning",
    stack: ["Python", "Google Colab", "pandas", "NumPy", "scikit-learn", "matplotlib", "ipywidgets", "kagglehub"],
    description:
      "Lightweight AI recommendation prototype that matches user vibes (e.g. 'urban chic', 'boho weekend', 'minimalist office') to relevant fashion products using text embeddings and cosine similarity. Built on a 1,000-product Kaggle dataset with combined natural language descriptions, offline deterministic embeddings, latency tracking, and an interactive ipywidgets UI for live queries. Built as part of the Nexora Internship Assessment.",
    github: "https://github.com/Shahidshaik999/Vibe-Matcher-AI-driven-vibe-to-product-recommender",
    demo: "",
  },
  {
    title: "Financial Document Analyzer — Multi-Agent AI System",
    category: "AI Application",
    stack: ["Python", "FastAPI", "CrewAI", "Groq API", "LLaMA 3.1", "SQLAlchemy", "SQLite", "Redis", "RQ", "pypdf", "LiteLLM"],
    description:
      "Production-ready multi-agent AI system for analyzing corporate financial documents (10-K, 10-Q, earnings statements) using 4 specialized CrewAI agents — Financial Analyst, Document Verifier, Investment Advisor, and Risk Assessor. Fixed 15 systematic bugs, achieved 70% token reduction through prompt optimization, and implemented automatic retry with exponential backoff for Groq rate limits. Includes SQLite request tracking and Redis queue for background processing.",
    github: "https://github.com/Shahidshaik999/finantial_document_analyzer_by_shahid",
    demo: "",
  },
  {
    title: "Code Review OpenEnv — AI Agent Training Environment",
    category: "AI Application",
    stack: ["Python", "FastAPI", "Pydantic", "Docker", "Hugging Face", "LLaMA 3.3-70B", "OpenEnv"],
    description:
      "A real-world OpenEnv environment where AI agents practice code review across easy, medium, and hard tasks — identifying bugs, security vulnerabilities (SQL injection, MD5 hashing, hardcoded secrets), and logic errors with line-level precision. Features a deterministic reward function with keyword coverage scoring, fix bonus, loop penalty, and step improvement bonus. Deployed on Hugging Face Spaces with a baseline agent scoring 0.918 average across all tasks.",
    github: "https://github.com/Shahidshaik999/Code_review_openenv_by_shahid",
    demo: "https://huggingface.co/spaces/shahidshaik9/code-review-openenv",
  },
  {
    title: "Nova AI Voice Avatar — Real-Time Conversational AI",
    category: "AI Application",
    stack: ["React 18", "Vite", "Node.js", "Express", "Groq API", "LLaMA 3.1", "Framer Motion", "Web Speech API", "SpeechSynthesis API", "SSE"],
    description:
      "Real-time AI voice companion with an animated SVG cat avatar featuring lip-sync, blinking, tail wag, and mouse-tracking eyes. Supports 8 personality modes (Savage, Indian Mom, Toxic Friend, Girlfriend, Robot, and more), wake word detection, continuous listening, image analysis via Groq Vision, streaming responses via SSE, persistent chat memory with auto-summarization, and conversation export — all in a dark-theme immersive UI.",
    github: "https://github.com/Shahidshaik999/Real-time-conversational-AI-with-a-savage-personality_by_shahid",
    demo: "",
  },
  {
    title: "Maintenance Wizard — Intelligent Industrial Maintenance AI System",
    category: "AI Application",
    stack: ["React 18", "TypeScript", "FastAPI", "LangChain", "LangGraph", "Groq API", "LLaMA-3.3-70B", "ChromaDB", "SQLAlchemy", "WebSockets", "Recharts", "Tailwind CSS"],
    description:
      "Full-stack Agentic AI platform for industrial equipment maintenance in steel manufacturing, built for Tata Steel AI Hackathon 2026 Round 2. Features 5 specialized AI agents — Diagnostic (RCA with evidence), Predictive (RUL + anomaly detection), Knowledge (RAG over manuals/SOPs), Chat (multi-turn with session memory), and Report — across 10 UI pages with 41 API endpoints, real-time WebSocket chat, and plant-wide priority ranking.",
    github: "https://github.com/Shahidshaik999/AI_hackathon_TATA_Round_2",
    demo: "",
  },
  {
    title: "Store Intelligence System — Purplle Tech Challenge 2026",
    category: "AI Application",
    stack: ["Python", "FastAPI", "YOLOv8n", "ByteTrack", "ResNet18", "SQLAlchemy", "SQLite", "Docker", "OpenCV"],
    description:
      "End-to-end pipeline that converts raw CCTV footage into real-time retail analytics, built for Purplle Tech Challenge 2026 Round 2. Detects and tracks visitors using YOLOv8n + ByteTrack with appearance-based Re-ID, staff classification via HSV histograms, and polygon zone mapping. Exposes a FastAPI backend with metrics, funnel, heatmap, and anomaly endpoints, plus a live auto-refreshing web dashboard and terminal dashboard.",
    github: "https://github.com/Shahidshaik999/purplle_hackathon_by_shaik_shahid",
    demo: "",
  },
  {
    title: "Placement Predictor AI – ML Placement Prediction System",
    category: "Machine Learning",
    stack: ["Python", "React", "FastAPI", "Scikit-learn", "TailwindCSS"],
    description:
      "AI-powered web application that predicts student placement outcomes using a Random Forest classifier trained on real campus placement data. Users input academic details and receive placement probability predictions with confidence scores through a FastAPI backend and React frontend.",
    github: "https://github.com/Shahidshaik999/AI-powered-placement-prediction-system_by_shahid",
    demo: "",
  },
  {
    title: "AI Chat Reply Assistant – Chrome Extension",
    category: "AI Application",
    stack: ["JavaScript", "Chrome Extension API", "FastAPI", "Groq AI", "Llama 3.1"],
    description:
      "Chrome extension that generates intelligent reply suggestions for WhatsApp Web and LinkedIn messages using Groq's Llama 3.1 model. The extension analyzes chat messages and provides contextual responses that can be inserted into conversations with one click.",
    github: "https://github.com/Shahidshaik999/AI-Chat-Reply-Assistant-Chrome-Extension-for-Smart-AI-Responses-by-shahid",
    demo: "",
  },
  {
    title: "AI Hide and Seek – Adaptive Game AI",
    category: "AI Game Development",
    stack: ["React", "Phaser.js", "Python", "FastAPI", "A* Pathfinding"],
    description:
      "AI-powered hide-and-seek game featuring an intelligent police agent that uses A* pathfinding, velocity-based interception, and player behavior learning to hunt the player. The AI adapts strategies dynamically and includes multiple difficulty levels with real-time decision making.",
    github: "https://github.com/Shahidshaik999/AI-Hide-and-Seek-Adaptive-Police-Agent-That-Learns-Player-Behavior_by_shahid",
    demo: "",
  },
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
    title: "QRCraft Pro — Professional QR Code Generator",
    category: "Web Application",
    stack: ["HTML5", "CSS3", "Vanilla JavaScript", "qrcodejs", "Web Share API", "FileReader API", "Vercel"],
    description:
      "Client-side QR code generator — no backend, no sign-up, no data leaves the browser. Supports URLs, social media profiles (Instagram, GitHub, LinkedIn, X, and more), file uploads via drag-and-drop, and plain text. Fully customisable QR colour, background, size, and error correction level. Export as PNG or SVG, share via Web Share API, and deploy to Vercel in one click.",
    github: "https://github.com/Shahidshaik999/QR_code_generator_for_any_files_by_shahid",
    demo: "https://qr-code-generator-for-any-files-by.vercel.app/",
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
  {
    title: "AutoTyper Tool — Auto-Typing for Code Demos",
    category: "Python Application",
    stack: ["Python", "pyautogui", "keyboard", "pyperclip", "Windows OS"],
    description:
      "A developer utility that auto-types clipboard content character by character like a human — perfect for recording coding videos. Supports adjustable typing speed, syntax-aware mode (F6) for HTML, Python, JS, React, CSS, JSON, C++, and more. Hotkeys to start (F9), stop (F10), and control speed on the fly. Runs on Windows with a one-click run.bat installer.",
    github: "https://github.com/Shahidshaik999/Auto_typer_tool_by_shahid",
    demo: "",
  },
  {
    title: "Chess Local — 2 Player Offline Chess",
    category: "Web Application",
    stack: ["React 18", "chess.js", "react-chessboard", "Framer Motion", "Tailwind CSS", "Web Audio API", "Vite"],
    description:
      "Fully-featured local 2-player chess app with no backend or internet required. Includes full chess rules (en passant, castling, pawn promotion), per-player countdown clocks, scrollable move history with jump-to support, 5 board themes, opening detection across 28 openings, draw offers, resign, undo, confetti on checkmate, and PGN export — all powered by chess.js and Web Audio API for sound effects.",
    github: "https://github.com/Shahidshaik999/Chess_game_by_shahid",
    demo: "",
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
