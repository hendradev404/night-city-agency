import { motion } from "framer-motion";

const team = [
  {
    name: "HENDRA",
    role: "LEAD ARCHITECT",
    speciality: "Full-Stack / AI Systems",
    status: "ONLINE",
    avatar: "H",
    color: "neon-cyan",
  },
  {
    name: "NEXUS-7",
    role: "UI/UX ENGINEER",
    speciality: "Interface Design / Motion",
    status: "ONLINE",
    avatar: "N7",
    color: "neon-magenta",
  },
  {
    name: "CIPHER",
    role: "BACKEND SPECIALIST",
    speciality: "Cloud Infra / DevOps",
    status: "ONLINE",
    avatar: "CI",
    color: "neon-green",
  },
];

const AboutTeam = () => {
  return (
    <section className="relative py-32 circuit-bg">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-mono text-xs tracking-[0.3em] text-neon-green mb-3">&gt; ABOUT.READ()</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">THE</span>{" "}
              <span className="neon-text-cyan">OPERATIVES</span>
            </h2>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                We are a collective of elite digital architects operating from the bleeding edge of technology.
                Forged in the fires of complex enterprise systems and sharpened by startup velocity.
              </p>
              <p>
                Every project is a mission. Every line of code is precision-engineered. We don't build websites —
                we construct digital ecosystems that dominate their sector.
              </p>
              <p>
                Our tech stack spans the full spectrum: from quantum-optimized backends to neural-driven frontends.
                If it can be coded, we've already shipped it.
              </p>
            </div>

            {/* Tech badges */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["REACT", "NODE.JS", "PYTHON", "AWS", "AI/ML", "WEB3", "RUST", "K8S"].map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] tracking-wider px-3 py-1 border border-neon-cyan/20 text-neon-cyan/60 rounded-sm hover:border-neon-cyan hover:text-neon-cyan transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 rounded-sm group hover:border-neon-cyan transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-14 h-14 rounded-sm bg-${member.color}/10 border border-${member.color}/30 flex items-center justify-center font-major text-lg text-${member.color} group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-shadow`}>
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-base font-semibold text-foreground">{member.name}</h3>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse" />
                        <span className="font-mono text-[9px] text-neon-green/70">{member.status}</span>
                      </div>
                    </div>
                    <p className={`font-mono text-[10px] tracking-wider text-${member.color} mb-1`}>{member.role}</p>
                    <p className="font-mono text-[10px] text-muted-foreground">{member.speciality}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
