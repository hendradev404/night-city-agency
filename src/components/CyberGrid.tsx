import { motion } from "framer-motion";

const services = [
  {
    title: "Neural Web Architecture",
    description: "Cutting-edge web systems built on neural network principles. Self-healing, adaptive, and blazing fast.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-neon-cyan">
        <circle cx="32" cy="12" r="4" />
        <circle cx="12" cy="32" r="4" />
        <circle cx="52" cy="32" r="4" />
        <circle cx="22" cy="52" r="4" />
        <circle cx="42" cy="52" r="4" />
        <line x1="32" y1="16" x2="12" y2="28" />
        <line x1="32" y1="16" x2="52" y2="28" />
        <line x1="12" y1="36" x2="22" y2="48" />
        <line x1="52" y1="36" x2="42" y2="48" />
        <line x1="22" y1="52" x2="42" y2="52" />
      </svg>
    ),
    color: "cyan",
  },
  {
    title: "Quantum App Dev",
    description: "Mobile and web applications engineered for parallel processing and quantum-ready infrastructure.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-neon-magenta">
        <ellipse cx="32" cy="32" rx="28" ry="10" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="28" ry="10" transform="rotate(120 32 32)" />
        <circle cx="32" cy="32" r="3" fill="currentColor" />
      </svg>
    ),
    color: "magenta",
  },
  {
    title: "AI Matrix Marketing",
    description: "Autonomous marketing systems powered by machine learning. Predict, engage, and convert at scale.",
    icon: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-neon-green">
        <rect x="8" y="8" width="48" height="48" rx="4" />
        <line x1="8" y1="24" x2="56" y2="24" />
        <line x1="8" y1="40" x2="56" y2="40" />
        <line x1="24" y1="8" x2="24" y2="56" />
        <line x1="40" y1="8" x2="40" y2="56" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
        <circle cx="48" cy="48" r="2" fill="currentColor" />
        <circle cx="32" cy="32" r="2" fill="currentColor" />
      </svg>
    ),
    color: "green",
  },
];

const glowMap: Record<string, string> = {
  cyan: "hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]",
  magenta: "hover:shadow-[0_0_30px_rgba(255,0,255,0.2)]",
  green: "hover:shadow-[0_0_30px_rgba(204,255,0,0.2)]",
};

const borderMap: Record<string, string> = {
  cyan: "hover:border-neon-cyan",
  magenta: "hover:border-neon-magenta",
  green: "hover:border-neon-green",
};

const CyberGrid = () => {
  return (
    <section id="services" className="relative py-32 circuit-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-neon-green mb-3">&gt; SERVICES.LOAD()</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="neon-text-cyan">THE CYBER</span>{" "}
            <span className="text-foreground">GRID</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass-card p-8 rounded-sm transition-all duration-500 ${glowMap[service.color]} ${borderMap[service.color]} group`}
            >
              <div className="mb-6 group-hover:animate-float">{service.icon}</div>
              <h3 className="font-display text-lg font-semibold mb-3 text-foreground">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              <div className="mt-6 font-mono text-xs text-primary/60 tracking-wider">
                [LEARN MORE →]
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CyberGrid;
