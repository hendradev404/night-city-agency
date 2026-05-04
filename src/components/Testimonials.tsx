import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "ALEX MERCER",
    role: "CTO, NexGen Corp",
    text: "HENDRA.DEV rebuilt our entire platform in record time. The performance gains were off the charts — 300% faster load times and a UI that feels like it's from the future.",
    rating: 5,
    avatar: "AM",
    accentColor: "neon-cyan",
  },
  {
    name: "SARAH CHEN",
    role: "Founder, Synthetics.io",
    text: "Working with HENDRA.DEV felt like plugging into the mainframe. They understood our vision instantly and delivered a product that exceeded every metric we set.",
    rating: 5,
    avatar: "SC",
    accentColor: "neon-magenta",
  },
  {
    name: "MARCUS VALE",
    role: "VP Engineering, DataForge",
    text: "The AI dashboard they built processes 10M data points in real-time. No lag, no crashes. Pure engineering excellence. Our team was blown away.",
    rating: 5,
    avatar: "MV",
    accentColor: "neon-green",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-neon-cyan mb-3">&gt; TESTIMONIALS.LOAD()</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            <span className="neon-text-magenta">CLIENT</span>{" "}
            <span className="text-foreground">TRANSMISSIONS</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              onMouseEnter={() => setActive(i)}
              className={`glass-card p-6 rounded-sm transition-all duration-500 cursor-pointer border ${
                active === i
                  ? `border-${t.accentColor} shadow-[0_0_30px_rgba(0,255,255,0.15)]`
                  : "border-neon-cyan/10"
              }`}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className={`text-${t.accentColor} text-sm`}>◆</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-neon-cyan/10 pt-4">
                <div className={`w-10 h-10 rounded-sm bg-${t.accentColor}/10 border border-${t.accentColor}/30 flex items-center justify-center font-mono text-xs text-${t.accentColor}`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
