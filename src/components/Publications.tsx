import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, Award, BookOpen } from "lucide-react";

const publications = [
  {
    title: "New Parent App: A Mobile-Based Baby Growth and Milestone Tracker with Chatbot Support",
    venue: "at the IEEE International Conference on Sustainable Communication Networks and Applications (ICSCN 2025)",
    summary:
      "As part of my journey in AI & Mobile App Development, I built ParentalCare, an innovative app that helps new parents track their baby’s growth, health milestones, and vaccinations using AI aligned with WHO/CDC standards. The app features real-time growth tracking (height, weight, head circumference), an AI-powered 24/7 parental guidance chatbot, and smart vaccination reminders with milestone alerts. It is developed using React Native (frontend) and Supabase with PostgreSQL (backend), secured through JWT authentication and Row-Level Security. The project supports UN SDGs by promoting good health, digital health innovation, and accessible healthcare—aiming to make reliable parental guidance affordable and available to all.",
    paper: "https://drive.google.com/file/d/1C8xg2l2EEVH0MBrkZZKsAuCl9uJmDCh6/view?usp=sharing",
    certificate: "https://www.linkedin.com/posts/shaik-shahid-7a1897282_an-ai-powered-baby-growth-and-health-monitoring-activity-7384530989479526400-HOn0?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAETUjKkBc2oEhLWQB3Oi19iSIdH29QOHJYY",
  },

];

const Publications = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="publications" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Publications & <span className="text-gradient">Research</span>
          </h2>
          <p className="section-subtitle">Peer-reviewed academic contributions.</p>
        </motion.div>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10 flex-shrink-0 mt-1">
                  <BookOpen size={20} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-lg mb-1">{pub.title}</h3>
                  <p className="text-primary text-sm mb-3">{pub.venue}</p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{pub.summary}</p>
                  <div className="flex flex-wrap gap-3">
                    <a href={pub.paper} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
                      <FileText size={14} /> View Paper
                    </a>
                    <a href={pub.certificate} className="btn-ghost text-xs">
                      <Award size={14} /> Certificate
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
