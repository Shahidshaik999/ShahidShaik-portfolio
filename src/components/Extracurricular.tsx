import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Users, Calendar, Heart } from "lucide-react";

const activities = [
  {
    icon: Dumbbell,
    title: "Sports & Games",
    items: [
      "School-level Chess Competition Winner",
      "Solved 2×2, 3×3, and 4×4 Rubik’s Cube",
    ],
  },
  {
    icon: Users,
    title: "Technical & Leadership",
    items: [
      "Active Participant – Smart India Hackathon (SIH)",
      "IEEE Robotics Challenge Finalist",
      "Regular Problem Solver on CodeChef and LeetCode",
    ],
  },
  {
    icon: Calendar,
    title: "Technical Engagement",
    items: [
      "Built multiple full-stack and AI/ML projects",
      "Hands-on experience with hackathons and coding contests",
      "Continuous learner in AI, DevOps, and System Design",
    ],
  },
  {
    icon: Heart,
    title: "Professional Development",
    items: [
      "Completed ML and Python certifications (IBM, Meta)",
      "DevOps training during Springer Capital internship",
      "Strong interest in building real-world scalable systems",
    ],
  },
];

const Extracurricular = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="extracurricular" className="relative">
      <div className="blob w-72 h-72 bg-primary/10 bottom-10 right-10" />
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Extracurricular <span className="text-gradient">Activities</span>
          </h2>
          <p className="section-subtitle">Beyond the code – sports, leadership, and community.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={act.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold">{act.title}</h3>
                </div>
                <ul className="space-y-2">
                  {act.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-secondary mt-0.5">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;
