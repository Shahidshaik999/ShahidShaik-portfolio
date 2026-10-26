import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Award, ExternalLink } from "lucide-react";

const achievements = [
  {
    title: "Tata Steel AI Hackathon 2026 — Round 2",
    position: "Top 10 National Finalist",
    description: "Competed against 1–2 lakh+ participants nationally. Cleared Round 1, qualified among 109 for Round 2, advanced to the final interview round, finished in the Top 10, and received a pre-offer from Tata Steel.",
    link: "https://ai-hackathon-tata-round-2.vercel.app/",
  },
  {
    title: "TCS CodeVita - 13",
    position: "Global Finalist – Top 1600",
    description: "Competed among 576000+ participants worldwide in algorithmic programming challenges.",
    link: "https://drive.google.com/file/d/1yrs5MVSbBA7p31cEHmffn1ngZqdjQOPa/view?usp=sharing",
  },
  {
    title: "Smart India Hackathon",
    position: "Finalist",
    description: "Autonomous drones powered by sensor fusion and smart pathfinding to deliver urgent medical supplies quickly and safely to rural areas, improving healthcare access while reducing human involvement.",
    link: "https://docs.google.com/presentation/d/1_GnWg-icJ6-wRq-0g-x1EftazgE_wthA/edit?usp=sharing&ouid=107606192232896086700&rtpof=true&sd=true",
  },
  {
    title: "Software Freedom Festival 2.0",
    position: "Winner",
    description: "Secured 2nd Prize in Autonomous Delivery Drone Innovation Challenge.",
    link: "https://www.linkedin.com/posts/shaik-shahid-7a1897282_innovation-teamwork-softwaredevelopment-share-7234946755115511808-2gWO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAETUjKkBc2oEhLWQB3Oi19iSIdH29QOHJYY",
  },
  {
    title: "IEEE Robotics Challenge",
    position: "Finalist",
    description: " Developed a Smart CSSR system using CNNs for thermal imaging, RNNs for sound detection, and methane sensorsfor victim identification. Integrated real-time processing on Raspberry Pi with GSM communication for efficient rescue operations.",
    link: "#",
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span>
          </h2>
          <p className="section-subtitle">Competitions, awards, and milestones.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-secondary/10 flex-shrink-0">
                  <Trophy size={20} className="text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold mb-1">{ach.title}</h3>
                  <p className="text-secondary text-sm font-medium mb-2">{ach.position}</p>
                  <p className="text-sm text-muted-foreground mb-3">{ach.description}</p>
                  <a href={ach.link} className="btn-ghost text-xs">
                    <Award size={14} /> Certificate
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
