import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile-placeholder.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background blobs */}
      <div className="blob w-96 h-96 bg-primary/20 top-1/4 -left-48" />
      <div className="blob w-72 h-72 bg-secondary/15 bottom-1/4 right-0" />
      <div className="blob w-64 h-64 bg-accent/10 top-10 right-1/3" />

      <div className="section-container w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary font-medium mb-4"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold mb-4 leading-tight"
            >
              Shaik <span className="text-gradient">Shahid</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-6 font-medium"
            >
              Software Engineer 
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
            >
             Curious engineer who enjoys designing and shipping end-to-end applications—from responsive interfaces to intelligent backend systems.
             I like working where software meets real user needs and am always ready to adapt, learn, and build with any technology the problem demands.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-primary">
                <ArrowDown size={18} /> View Projects
              </a>
              <a href="/resume.pdf" className="btn-outline" target="_blank" rel="noopener noreferrer">
                <Download size={18} /> Download Resume
              </a>
              <a href="#contact" className="btn-outline">
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>
          </div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative floating">
              <div className="glow-border w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
