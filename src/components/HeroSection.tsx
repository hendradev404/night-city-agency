import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Cyberpunk city"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Animated code rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary/10 whitespace-nowrap"
            style={{ left: `${i * 5}%` }}
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: "110vh", opacity: [0, 0.3, 0.3, 0] }}
            transition={{
              duration: 8 + Math.random() * 8,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => (
              <div key={j}>{String.fromCharCode(0x30A0 + Math.random() * 96)}</div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.3em] text-neon-green mb-6 neon-flicker">
            &gt; INITIALIZING DIGITAL REVOLUTION_
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-display text-4xl md:text-6xl lg:text-8xl font-black leading-tight tracking-tight mb-6"
        >
          <span className="neon-text-cyan">WE BUILD</span>
          <br />
          <span className="neon-text-magenta">THE FUTURE</span>
          <br />
          <span className="text-foreground">OF DIGITAL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Next-gen digital agency specializing in neural web architecture,
          quantum applications, and AI-powered marketing systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#contact" className="neon-btn text-sm">
            &gt; JACK IN_
          </a>
          <a href="#services" className="neon-btn text-sm !border-neon-magenta !text-neon-magenta hover:!shadow-[0_0_15px_rgba(255,0,255,0.3)]">
            &gt; EXPLORE SERVICES_
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          {[
            { val: "200+", label: "Projects Deployed" },
            { val: "99.9%", label: "Uptime Guarantee" },
            { val: "50ms", label: "Avg Response" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold neon-text-cyan">{stat.val}</div>
              <div className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
