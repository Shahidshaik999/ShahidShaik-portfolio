import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Extracurricular from "@/components/Extracurricular";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Background gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none -z-10"
        style={{ background: "var(--gradient-bg)" }}
      />

      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Publications />
        <Certifications />
        <Achievements />
        <Extracurricular />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
